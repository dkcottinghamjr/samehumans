const NAV_LINKS = [
  ["hero", "Home"],
  ["timeline", "Revolutions"],
  ["laws", "Laws"],
  ["archetypes", "Archetypes"],
  ["chat", "Ask the Book"],
];

export default function Nav({ section, go }) {
  return (
    <nav className="nav">
      <div className="nav-brand" onClick={() => go("hero")}>
        THE SAME HUMANS
      </div>
      <div className="nav-links">
        {NAV_LINKS.map(([id, label]) => (
          <button
            key={id}
            className={`nav-link ${section === id ? "active" : ""}`}
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
