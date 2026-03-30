import Link from "next/link";
import type { ActivityRecord } from "@/lib/mock-data";
import { formatRelativeTime, shortenHash } from "@/lib/format";

export function ActivityCard({ item }: { item: ActivityRecord }) {
  return (
    <Link href={`/history/${item.id}`} className="activity-card relative">
      <div className="activity-topline">
        <div>
          <p className="mini-label">{item.state}</p>
          <h3 className="activity-title">{item.title}</h3>
        </div>
        <div className="activity-figure">+{item.delta}</div>
      </div>
      <p className="muted-copy">{item.note}</p>
      <div className="support-line">
        <span className="metric-pill">{item.actor}</span>
        <span className="mini-pill">{formatRelativeTime(item.timestamp)}</span>
      </div>
      <div className="mini-label">Hash {shortenHash(item.txHash)}</div>
    </Link>
  );
}


