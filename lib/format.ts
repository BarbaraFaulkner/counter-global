export function formatCount(value: bigint | number | null | undefined) {
  const safeValue = typeof value === "bigint" ? Number(value) : value ?? 0;
  return new Intl.NumberFormat("en-US").format(safeValue);
}

export function formatShortAddress(address?: string) {
  if (!address) return "No wallet";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatRelativeTime(timestamp: string) {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minute = 60_000;
  const hour = 60 * minute;

  if (diff < minute) return "Just now";
  if (diff < hour) return `${Math.max(1, Math.floor(diff / minute))} min ago`;
  return `${Math.max(1, Math.floor(diff / hour))} hr ago`;
}

export function shortenHash(hash?: string) {
  if (!hash) return "Pending";
  return `${hash.slice(0, 10)}...${hash.slice(-6)}`;
}


