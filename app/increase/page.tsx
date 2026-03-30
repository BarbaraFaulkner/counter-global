"use client";

import { CounterStatusChip } from "@/components/counter-status-chip";
import { IncrementPanel } from "@/components/increment-panel";
import { useCounterApp } from "@/hooks/use-counter-app";

export default function IncreasePage() {
  const { count, hash, increment, isBusy, isConnected, status, writeError } = useCounterApp();

  return (
    <div className="stack">
      <section className="page-title">
        <span className="section-badge"><span className="dot" />Action console</span>
        <h1>Push the public meter.</h1>
        <p>Connect a wallet, hit one button, refresh the global total.</p>
      </section>

      <IncrementPanel
        count={count}
        busy={isBusy}
        disabled={!isConnected || isBusy}
        statusLabel={status.label}
        statusHint={isConnected ? status.hint : "Connect wallet to increment"}
        txHash={hash}
        onIncrement={increment}
      />

      <div className="panel section stack">
        <div className="chip-row">
          <CounterStatusChip label={isConnected ? "Wallet ready" : "Wallet missing"} hint={isConnected ? "Tap to write on Base" : "Connection required"} tone={isConnected ? "ready" : "synced"} />
          <CounterStatusChip label={hash ? "Hash live" : "No hash yet"} hint={hash ? "Transaction submitted" : "Waiting for action"} tone={hash ? "success" : "synced"} />
        </div>
        {writeError ? <p className="muted-copy">Transaction failed. Please try again.</p> : null}
      </div>
    </div>
  );
}


