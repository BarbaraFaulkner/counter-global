"use client";

import { seededActivity, type ActivityRecord } from "@/lib/mock-data";

const STORAGE_KEY = "counter-global-activity";

export function readActivityRecords(): ActivityRecord[] {
  if (typeof window === "undefined") return seededActivity;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seededActivity));
    return seededActivity;
  }

  try {
    return JSON.parse(raw) as ActivityRecord[];
  } catch {
    return seededActivity;
  }
}

export function writeActivityRecord(record: ActivityRecord) {
  if (typeof window === "undefined") return;
  const next = [record, ...readActivityRecords()].slice(0, 14);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}


