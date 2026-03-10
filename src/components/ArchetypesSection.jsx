import { useState } from "react";
import { ARCHETYPES } from "../data/archetypes";

export default function ArchetypesSection() {
  const [sel, setSel] = useState(null);
  const arch = sel !== null ? ARCHETYPES[sel] : null;

  return (
    <section className="sec" id="archetypes">
      <div className="sh">
        <div className="sl">Eight Recurring Roles</div>
        <h2 className="st">The Archetypes</h2>
        <p className="sd">
          These are not personality types but social positions — the same individual may occupy
          different roles at different stages. Henry Ford was Tinkerer, Prophet, Profiteer, and Moral
          Crusader in a single career.
        </p>
      </div>

      {arch && (
        <div className="ad">
          <div className="ad-top">
            <span className="ad-icon">{arch.icon}</span>
            <span className="ad-name">{arch.name}</span>
          </div>
          <div className="ad-trait">{arch.trait}</div>
          <div className="ad-desc">{arch.description}</div>
          <div className="ad-exl">Across Revolutions</div>
          <div className="ad-exs">
            {arch.examples.map((ex, i) => (
              <div key={i} className="ad-ex" style={{ borderColor: arch.color }}>
                <div className="ad-exn">{ex.name}</div>
                <div className="ad-exr">{ex.rev}</div>
                <div className="ad-exd">{ex.detail}</div>
              </div>
            ))}
          </div>
          <div className="ad-ai">
            <div className="ad-ail">In the AI Era</div>
            <div className="ad-ait">{arch.aiEra}</div>
          </div>
          <div className="ad-close" onClick={() => setSel(null)}>
            ← Back to all archetypes
          </div>
        </div>
      )}

      {!arch && (
        <div className="ag">
          {ARCHETYPES.map((a, i) => (
            <div key={a.id} className="ac" onClick={() => setSel(i)}>
              <div className="ac-icon">{a.icon}</div>
              <div className="ac-name">{a.name}</div>
              <div className="ac-trait">{a.trait}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
