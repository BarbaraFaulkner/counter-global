import Link from "next/link";

export function ActionBar() {
  return (
    <div className="action-row">
      <Link className="primary-button" href="/increase">
        Add one
      </Link>
      <Link className="secondary-button" href="/history">
        Open history
      </Link>
    </div>
  );
}


