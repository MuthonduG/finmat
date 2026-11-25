import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOMENTS } from '../data/moments';
import { vars } from '../utils';

/** Replaces the loan calculator: pick a goal and see the finmat products built for it. */
export default function Moments() {
  const [activeId, setActiveId] = useState(MOMENTS[0].id);
  const current = MOMENTS.find((m) => m.id === activeId) ?? MOMENTS[0];

  return (
    <section className="section section--alt" id="goals">
      <div className="container moments">
        <div className="moments__left">
          <h2>What are you working toward?</h2>
          <p className="moments__sub">Pick a goal and see the finmat products made for it.</p>

          <div className="moments__list" role="group" aria-label="Choose a goal">
            {MOMENTS.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`moment ${m.id === activeId ? 'is-active' : ''}`}
                aria-pressed={m.id === activeId}
                onClick={() => setActiveId(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="moments__panel" key={current.id} aria-live="polite">
          <p className="moments__intro">{current.intro}</p>
          {current.picks.map((p, i) => (
            <Link key={p.name} to={p.to} className="pick" style={vars({ '--i': i })}>
              <span className="pick__kind">{p.kind}</span>
              <strong>{p.name}</strong>
              <span>{p.detail}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
