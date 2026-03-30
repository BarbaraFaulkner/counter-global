import type { ActivityRecord } from "@/lib/mock-data";
import { ActivityCard } from "@/components/activity-card";
import { EmptyState } from "@/components/empty-state";

export function HistoryList({ items }: { items: ActivityRecord[] }) {
  if (!items.length) {
    return <EmptyState title="No activity yet" description="The next public tap will start the board." />;
  }

  return (
    <div className="history-board">
      <div className="timeline-rail" />
      {items.map((item) => (
        <ActivityCard key={item.id} item={item} />
      ))}
    </div>
  );
}


