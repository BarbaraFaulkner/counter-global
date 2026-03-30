"use client";

import { CounterStatusChip } from "@/components/counter-status-chip";
import { useCounterApp } from "@/hooks/use-counter-app";
import { formatCount, formatRelativeTime } from "@/lib/format";

export default function StatsPage() {
  const { activity, count, status } = useCounterApp();
  const latest = activity[0];

  return (
    <div className="stack">
      <section className="page-title">
        <span className="section-badge"><span className="dot" />Signal stats</span>
        <h1>Counter rhythm at a glance.</h1>
        <p>Compact public metrics, tuned for quick reading.</p>
      </section>

      <div className="stats-grid">
        <div className="panel section stack">
          <p className="mini-label">Live total</p>
          <div className="activity-figure">{formatCount(count)}</div>
          <CounterStatusChip label={status.label} hint={status.hint} tone={status.tone} />
        </div>
        <div className="panel section stack">
          <p className="mini-label">Recent moves</p>
          <div className="activity-figure">{formatCount(activity.length)}</div>
          <p className="muted-copy">Stored local history cards</p>
        </div>
        <div className="panel section stack">
          <p className="mini-label">Latest signal</p>
          <div className="activity-figure">{latest ? "+1" : "0"}</div>
          <p className="muted-copy">{latest ? formatRelativeTime(latest.timestamp) : "No activity yet"}</p>
        </div>
        <div className="panel section stack">
          <p className="mini-label">Mode</p>
          <div className="activity-figure">Open</div>
          <p className="muted-copy">Anyone can increment the counter</p>
        </div>
      </div>
    </div>
  );
}


