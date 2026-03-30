import type { ReactNode } from "react";

export function IconFrame({ children }: { children: ReactNode }) {
  return <span className="icon-box">{children}</span>;
}

export function PlusIcon() {
  return <span aria-hidden="true">+</span>;
}

export function PulseIcon() {
  return <span aria-hidden="true">~</span>;
}

export function GlobeIcon() {
  return <span aria-hidden="true">O</span>;
}

export function HistoryIcon() {
  return <span aria-hidden="true">=</span>;
}

export function ChartIcon() {
  return <span aria-hidden="true">#</span>;
}


