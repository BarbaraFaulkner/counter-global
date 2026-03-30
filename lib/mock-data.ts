export type ActivityRecord = {
  id: string;
  title: string;
  delta: number;
  state: "Increased" | "Synced" | "Queued";
  actor: string;
  timestamp: string;
  txHash?: string;
  note: string;
};

export const seededActivity: ActivityRecord[] = [
  {
    id: "sig-201",
    title: "Public tap",
    delta: 1,
    state: "Synced",
    actor: "0x42b1...d20f",
    timestamp: new Date(Date.now() - 6 * 60_000).toISOString(),
    txHash: "0xa31f0f6da83fe77ef969c433be754f7dcc1af5ab2c8044f251902cb2ad91bd29",
    note: "Signal added from mobile",
  },
  {
    id: "sig-200",
    title: "Crowd pulse",
    delta: 1,
    state: "Increased",
    actor: "0xb881...0f11",
    timestamp: new Date(Date.now() - 22 * 60_000).toISOString(),
    txHash: "0xbb458f1a714c2c162f30e32f84183e8da4f0cb9074d42b8c2c2d4297740da6ef",
    note: "Fresh increment confirmed",
  },
  {
    id: "sig-199",
    title: "Quick rise",
    delta: 1,
    state: "Synced",
    actor: "0x88fe...aa04",
    timestamp: new Date(Date.now() - 47 * 60_000).toISOString(),
    txHash: "0x23209a41af1f99ee715461837c3493e2bc98eef0deea74e20d234b03f8f30776",
    note: "Counter moved in public view",
  },
];


