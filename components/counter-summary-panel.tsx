import Link from "next/link";
import { CounterStatusChip } from "@/components/counter-status-chip";
import { CountDisplay } from "@/components/count-display";

export function CounterSummaryPanel({
  count,
  statusLabel,
  statusHint,
}: {
  count: bigint | number;
  statusLabel: string;
  statusHint: string;
}) {
  return (
    <section className="stack">
      <CountDisplay count={count} />
      <div className="panel section">
        <div className="stack">
          <CounterStatusChip label={statusLabel} hint={statusHint} tone="live" />
          <div className="two-up">
            <Link className="ghost-button" href="/counter">
              Open detail
            </Link>
            <Link className="ghost-button" href="/stats">
              View stats
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


