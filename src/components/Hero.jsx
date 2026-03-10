export default function Hero({ go }) {
  return (
    <section className="hero">
      <div className="hero-tagline">A framework for the age of AI</div>
      <h1 className="hero-title">
        The <span className="gold">Same</span> Humans
      </h1>
      <p className="hero-sub">
        What Twelve Thousand Years of Technological Revolution Reveal About the Age of AI
      </p>
      <div className="hero-cta">
        <button className="btn btn-p" onClick={() => go("timeline")}>
          Explore the Revolutions
        </button>
        <button className="btn" onClick={() => go("chat")}>
          Ask the Book
        </button>
      </div>
    </section>
  );
}
