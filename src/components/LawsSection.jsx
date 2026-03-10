import { useState } from "react";
import { LAWS } from "../data/laws";

export default function LawsSection() {
  const [sel, setSel] = useState(null);
  const law = sel !== null ? LAWS[sel] : null;

  return (
    <section className="sec sec-bg" id="laws">
      <div className="sh">
        <div className="sl">Eleven Structural Regularities</div>
        <h2 className="st">The Laws of Technological Revolution</h2>
        <p className="sd">
          Not laws of physics — structural regularities of human behavior, consistent enough across
          millennia to warrant serious predictive weight.
        </p>
      </div>

      {law && (
        <div className="ld">
          <div className="ld-i">{law.icon}</div>
          <div className="ln">LAW {law.id}</div>
          <div className="ld-t">{law.name}</div>
          <div className="ld-s">{law.short}</div>
          <div className="ld-c" onClick={() => setSel(null)}>
            ← Back to all laws
          </div>
        </div>
      )}

      {!law && (
        <div className="lg">
          {LAWS.map((l, i) => (
            <div key={l.id} className="lc" onClick={() => setSel(i)}>
              <div className="ln">
                LAW {l.id} {l.icon}
              </div>
              <div className="lnm">{l.name}</div>
              <div className="lds">{l.short}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
