type Tone = "ready" | "updating" | "increased" | "synced" | "live" | "success";

export function CounterStatusChip({
  label,
  hint,
  tone,
}: {
  label: string;
  hint: string;
  tone: Tone;
}) {
  return (
    <div className="status-chip" data-tone={tone}>
      <span className="dot" />
      <span>{label}</span>
      <span className="muted-copy">{hint}</span>
    </div>
  );
}


