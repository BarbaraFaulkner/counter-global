"use client";

import { CounterStatusChip } from "@/components/counter-status-chip";
import { CountDisplay } from "@/components/count-display";
import { shortenHash } from "@/lib/format";

export function IncrementPanel({
  count,
  busy,
  disabled,
  statusLabel,
  statusHint,
  txHash,
  onIncrement,
}: {
  count: bigint | number;
  busy: boolean;
  disabled: boolean;
  statusLabel: string;
  statusHint: string;
  txHash?: string;
  onIncrement: () => void;
}) {
  return (
    <section className="stack">
      <CountDisplay count={count} label="Signal total" caption="Every tap moves the same global meter" />
      <div className="signal-console stack">
        <div className="increment-ring" />
        <div className="support-line">
          <div>
            <p className="mini-label">Action panel</p>
            <p className="muted-copy">One tap adds one public count</p>
          </div>
          <CounterStatusChip label={statusLabel} hint={statusHint} tone={busy ? "synced" : "ready"} />
        </div>
        <button type="button" className="primary-button increment-button" disabled={disabled} onClick={onIncrement}>
          {busy ? "Updating..." : "+1"}
        </button>
        <div className="panel section">
          <div className="metric-row">
            <div className="metric-pill">Tx {shortenHash(txHash)}</div>
            <div className="metric-pill">{busy ? "Live write in progress" : "Ready for next tap"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}


