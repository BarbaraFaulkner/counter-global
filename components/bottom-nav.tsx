"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChartIcon, GlobeIcon, HistoryIcon, IconFrame, PlusIcon, PulseIcon } from "@/components/icons";

const navItems = [
  { href: "/", label: "Home", icon: <GlobeIcon /> },
  { href: "/increase", label: "Increase", icon: <PlusIcon /> },
  { href: "/counter", label: "Counter", icon: <PulseIcon /> },
  { href: "/history", label: "History", icon: <HistoryIcon /> },
  { href: "/stats", label: "Stats", icon: <ChartIcon /> },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-shell" aria-label="Main navigation">
      <div className="nav-grid">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className="nav-link" data-active={active}>
              <IconFrame>{item.icon}</IconFrame>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


