"use client";

import { CounterStatusChip } from "@/components/counter-status-chip";
import { EmptyState } from "@/components/empty-state";
import { useCounterApp } from "@/hooks/use-counter-app";
import { formatRelativeTime, shortenHash } from "@/lib/format";

export function HistoryDetailClient({ id }: { id: string }) {
  const { activity } = useCounterApp();
  const item = activity.find((entry) => entry.id === id);

  if (!item) {
    return <EmptyState title="Record not found" description="This activity detail is not available yet." />;
  }

  return (
    <div className="stack">
      <section className="page-title">
        <span className="section-badge"><span className="dot" />Record detail</span>
        <h1>{item.title}</h1>
        <p>Independent route for one increment record.</p>
      </section>

      <div className="panel section-lg stack">
        <div className="activity-figure">+{item.delta}</div>
        <div className="chip-row">
          <CounterStatusChip label={item.state} hint={formatRelativeTime(item.timestamp)} tone="success" />
          <CounterStatusChip label={item.actor} hint="Participant" tone="live" />
        </div>
        <div className="activity-card">
          <p className="mini-label">Transaction hash</p>
          <h3 className="activity-title mono">{shortenHash(item.txHash)}</h3>
          <p className="muted-copy">{item.note}</p>
        </div>
      </div>
    </div>
  );
}
