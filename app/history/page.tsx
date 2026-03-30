"use client";

import { HistoryList } from "@/components/history-list";
import { useCounterApp } from "@/hooks/use-counter-app";

export default function HistoryPage() {
  const { activity } = useCounterApp();

  return (
    <div className="stack">
      <section className="page-title">
        <span className="section-badge"><span className="dot" />Activity board</span>
        <h1>Recent public increments.</h1>
        <p>Rhythmic history cards instead of a plain table.</p>
      </section>

      <div className="panel section-lg">
        <HistoryList items={activity} />
      </div>
    </div>
  );
}


