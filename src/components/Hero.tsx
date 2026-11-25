import { INVESTMENTS, LOANS, SAVINGS } from '../data/products';
import { vars } from '../utils';
import PhoneMockup from './PhoneMockup';
import StoreButtons from './StoreButtons';

const FACTS = [
  { big: String(SAVINGS.length), small: 'ways to save, from KES 500 a month' },
  { big: String(LOANS.length), small: 'loan products for work, school and assets' },
  { big: String(INVESTMENTS.length), small: 'investment products' },
  { big: '7th', small: 'annual general meeting, held August 2026' },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="pill rise" style={vars({ '--d': '0ms' })}>
            Finmat Sacco, Nairobi
          </p>
          <h1 className="hero__title rise" style={vars({ '--d': '90ms' })}>
            Be financially independent.
          </h1>
          <p className="hero__lead rise" style={vars({ '--d': '180ms' })}>
            Save, borrow and invest with your sacco, and manage it all from the finmat app on Android and iPhone.
          </p>
          <div className="rise" style={vars({ '--d': '270ms' })}>
            <StoreButtons />
          </div>
        </div>

        <div className="hero__visual rise" style={vars({ '--d': '200ms' })}>
          <PhoneMockup />
        </div>
      </div>

      <div className="container">
        <dl className="facts">
          {FACTS.map((f) => (
            <div key={f.small} className="facts__item">
              <dt>{f.big}</dt>
              <dd>{f.small}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
