"use client";

export function CopyCountButton({
  copied,
  onCopy,
}: {
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button type="button" className="ghost-button" onClick={onCopy}>
      {copied ? "Copied" : "Copy count"}
    </button>
  );
}


