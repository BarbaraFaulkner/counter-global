"use client";

import { useCounterApp } from "@/hooks/use-counter-app";
import { formatShortAddress } from "@/lib/format";

export function WalletButton() {
  const { address, isConnected, isConnecting, toggleWallet } = useCounterApp();

  return (
    <button type="button" className="ghost-button wallet-button" onClick={toggleWallet}>
      {isConnecting ? "Connecting" : isConnected ? formatShortAddress(address) : "Connect"}
    </button>
  );
}


