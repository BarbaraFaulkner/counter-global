export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="empty-state">
      <p className="mini-label">Empty board</p>
      <h3 className="activity-title">{title}</h3>
      <p className="muted-copy">{description}</p>
    </div>
  );
}


