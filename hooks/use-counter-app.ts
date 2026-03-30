"use client";

import { useEffect, useMemo, useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { counterContract } from "@/lib/contract";
import { readActivityRecords, writeActivityRecord } from "@/lib/store";
import type { ActivityRecord } from "@/lib/mock-data";
import { trackTransaction } from "@/utils/track";

type StatusTone = "ready" | "updating" | "increased" | "synced";

export function useCounterApp() {
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { data, refetch, isLoading, isFetching } = useReadContract({
    ...counterContract,
    functionName: "counter",
    query: {
      refetchInterval: 10000,
    },
  });

  const { data: hash, isPending: isWriting, writeContract, error: writeError, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
  const [activity, setActivity] = useState<ActivityRecord[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActivity(readActivityRecords());
  }, []);

  useEffect(() => {
    if (!isSuccess || !hash) return;

    const record: ActivityRecord = {
      id: `sig-${Date.now()}`,
      title: "New public increment",
      delta: 1,
      state: "Increased",
      actor: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Unknown",
      timestamp: new Date().toISOString(),
      txHash: hash,
      note: "Live write confirmed on Base",
    };

    writeActivityRecord(record);
    setActivity(readActivityRecords());
    refetch();

    if (address) {
      void trackTransaction("app-001", "counter-global", address, hash);
    }
  }, [address, hash, isSuccess, refetch]);

  const status = useMemo(() => {
    if (isWriting || isConfirming) {
      return { label: "Updating", tone: "updating" as StatusTone, hint: "Signal moving onchain" };
    }
    if (isSuccess) {
      return { label: "Increased", tone: "increased" as StatusTone, hint: "Counter refreshed" };
    }
    if (isFetching || isLoading) {
      return { label: "Syncing", tone: "synced" as StatusTone, hint: "Reading live counter" };
    }
    return { label: "Ready", tone: "ready" as StatusTone, hint: chain?.name ?? "Base Mainnet" };
  }, [chain?.name, isConfirming, isFetching, isLoading, isSuccess, isWriting]);

  const increment = () => {
    reset();
    writeContract({
      ...counterContract,
      functionName: "increment",
    });
  };

  const toggleWallet = () => {
    if (isConnected) {
      disconnect();
      return;
    }

    const injectedConnector = connectors[0];
    if (injectedConnector) {
      connect({ connector: injectedConnector });
    }
  };

  const copyCount = async () => {
    try {
      await navigator.clipboard.writeText(String(data ?? 0n));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return {
    activity,
    address,
    copied,
    count: data ?? 0n,
    hash,
    increment,
    isConnected,
    isConnecting,
    isBusy: isWriting || isConfirming,
    status,
    toggleWallet,
    writeError,
    copyCount,
  };
}


