import { BRAND, STEPS } from '../config';
import { useInView } from '../hooks';
import { vars } from '../utils';

export default function JoinSteps() {
  const { ref, seen } = useInView<HTMLOListElement>(0.3);

  return (
    <section className="section" id="join">
      <div className="container">
        <div className="section__head">
          <h2>How to join finmat</h2>
          <p>Three steps from application to your first loan.</p>
        </div>

        <ol ref={ref} className={`steps ${seen ? 'is-in' : ''}`}>
          {STEPS.map((s, i) => (
            <li key={s.title} className="steps__item" style={vars({ '--i': i })}>
              <span className="steps__num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="join-actions">
          {BRAND.membershipFormUrl ? (
            <a className="btn btn--red" href={BRAND.membershipFormUrl} target="_blank" rel="noreferrer">
              Open the membership form
            </a>
          ) : (
            <a className="btn btn--red" href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>
              Call {BRAND.phone}
            </a>
          )}
          <a className="btn btn--ghost" href={`mailto:${BRAND.email}`}>
            Email {BRAND.email}
          </a>
        </div>
      </div>
    </section>
  );
}
