import { useState } from "react";
import { REVOLUTIONS } from "../data/revolutions";
import { PHASES } from "../data/phases";

export default function TimelineSection() {
  const [sel, setSel] = useState(null);
  const rev = sel !== null ? REVOLUTIONS[sel] : null;

  return (
    <section className="sec" id="timeline">
      <div className="sh">
        <div className="sl">Seven Revolutions</div>
        <h2 className="st">The Recurring Architecture</h2>
        <p className="sd">
          Every major technological revolution follows the same arc. Select a revolution to trace the
          pattern.
        </p>
      </div>

      <div className="tl-track">
        {REVOLUTIONS.map((r, i) => (
          <div
            key={r.id}
            className={`tl-item ${sel === i ? "active" : ""}`}
            onClick={() => setSel(sel === i ? null : i)}
          >
            <div className="tl-dot">{r.icon}</div>
            <div className="tl-date">{r.shortDate}</div>
            <div className="tl-name">{r.name}</div>
          </div>
        ))}
      </div>

      {rev && (
        <div className="rd">
          <div className="rd-h">
            <span className="rd-icon">{rev.icon}</span>
            <span className="rd-title">{rev.name}</span>
          </div>
          <div className="rd-sum">{rev.summary}</div>
          <div className="rd-phases">
            {PHASES.map((ph) => (
              <div key={ph.id} className="rd-phase" style={{ borderColor: ph.color }}>
                <div className="rd-pn" style={{ color: ph.color }}>
                  {ph.name}
                </div>
                <div className="rd-pt">{rev[ph.id]}</div>
              </div>
            ))}
          </div>
          <div className="rd-meta">
            <div className="rd-mc">
              <div className="rd-ml">The Displaced</div>
              <div className="rd-mt">{rev.displaced}</div>
            </div>
            <div className="rd-mc">
              <div className="rd-ml">What Was Lost &amp; Gained</div>
              <div className="rd-mt">{rev.lostGained}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
