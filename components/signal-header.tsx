"use client";

import Link from "next/link";
import { WalletButton } from "@/components/wallet-button";

export function SignalHeader() {
  return (
    <header className="signal-header">
      <div className="signal-header-bar">
        <Link href="/" className="title-stack">
          <span className="eyebrow">
            <span className="dot" />
            Global Counter
          </span>
          <h2>counter-global</h2>
          <p>Public signal on Base</p>
        </Link>
        <WalletButton />
      </div>
    </header>
  );
}


