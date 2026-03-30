"use client";

import { CopyCountButton } from "@/components/copy-count-button";
import { CounterStatusChip } from "@/components/counter-status-chip";
import { CountDisplay } from "@/components/count-display";
import { useCounterApp } from "@/hooks/use-counter-app";
import { formatShortAddress } from "@/lib/format";

export default function CounterPage() {
  const { activity, copied, copyCount, count, status, address } = useCounterApp();

  return (
    <div className="stack">
      <section className="page-title">
        <span className="section-badge"><span className="dot" />Tally detail</span>
        <h1>Live count surface.</h1>
        <p>The number, the state, and the latest public movement.</p>
      </section>

      <div className="panel section-lg stack">
        <CountDisplay count={count} label="Current count" caption="Shared total across every participant" />
        <div className="chip-row">
          <CounterStatusChip label={status.label} hint={status.hint} tone={status.tone} />
          <CounterStatusChip label="Last actor" hint={activity[0]?.actor ?? "No recent actor"} tone="live" />
        </div>
        <div className="two-up">
          <CopyCountButton copied={copied} onCopy={copyCount} />
          <div className="ghost-button" style={{ pointerEvents: "none" }}>{formatShortAddress(address)}</div>
        </div>
      </div>
    </div>
  );
}


