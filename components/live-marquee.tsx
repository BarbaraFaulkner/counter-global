export function LiveMarquee() {
  const items = ["Public signal", "Base live", "One tap increment", "Shared count", "Open meter", "History flow"];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="mini-pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}


