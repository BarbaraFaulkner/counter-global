"use client";

import { ActionBar } from "@/components/action-bar";
import { CounterStatusChip } from "@/components/counter-status-chip";
import { CounterSummaryPanel } from "@/components/counter-summary-panel";
import { LiveMarquee } from "@/components/live-marquee";
import { useCounterApp } from "@/hooks/use-counter-app";

export default function HomePage() {
  const { activity, count, status } = useCounterApp();

  return (
    <div className="stack">
      <section className="page-title">
        <span className="section-badge"><span className="dot" />Public entry</span>
        <h1>Current count first.</h1>
        <p>Fast access to the live total and the next public tap.</p>
      </section>

      <div className="split-grid">
        <CounterSummaryPanel count={count} statusLabel={status.label} statusHint={status.hint} />
        <section className="stack">
          <div className="panel section-lg stack">
            <CounterStatusChip label={status.label} hint={status.hint} tone={status.tone} />
            <ActionBar />
          </div>
          <div className="panel section stack">
            <div className="support-line">
              <div>
                <p className="mini-label">Recent pulse</p>
                <p className="muted-copy">{activity[0]?.note ?? "Waiting for the next signal"}</p>
              </div>
              <div className="activity-figure">+{activity.length}</div>
            </div>
            <LiveMarquee />
          </div>
        </section>
      </div>
    </div>
  );
}


