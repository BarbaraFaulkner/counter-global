import { formatCount } from "@/lib/format";

export function CountDisplay({
  count,
  label = "Current count",
  caption = "Live public total",
}: {
  count: bigint | number;
  label?: string;
  caption?: string;
}) {
  const barHeights = [0.34, 0.48, 0.66, 0.82, 0.58, 0.92, 0.74, 1];

  return (
    <div className="panel count-stage">
      <div className="support-line">
        <div>
          <p className="mini-label">{label}</p>
          <p className="muted-copy">{caption}</p>
        </div>
        <div className="metric-pill">Base Mainnet</div>
      </div>
      <div className="count-value">
        <strong>{formatCount(count)}</strong>
        <span>Total</span>
      </div>
      <div className="signal-bars" aria-hidden="true">
        {barHeights.map((height, index) => (
          <i key={index} style={{ height: `${height * 100}%`, animationDelay: `${index * 0.12}s` }} />
        ))}
      </div>
    </div>
  );
}


