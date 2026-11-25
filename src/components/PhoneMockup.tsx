import { useEffect, useState } from 'react';
import { useCountUp } from '../hooks';
import { BellIcon, LoanIcon, PlusIcon, StatementIcon } from './Icons';

const fmt = (n: number) => new Intl.NumberFormat('en-KE').format(n);

const TRANSACTIONS = [
  { label: 'Monthly savings', date: 'Today', amount: '+ 5,000', positive: true },
  { label: 'Loan repayment', date: 'Mon', amount: '- 8,250', positive: false },
  { label: 'Dividend', date: 'Fri', amount: '+ 3,400', positive: true },
];

export default function PhoneMockup() {
  const [ready, setReady] = useState(false);
  const balance = useCountUp(128450, ready, 1800);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 700);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="phone-wrap" aria-hidden="true">
      <div className="phone-glow" />

      <div className="phone">
        <div className="phone__notch" />
        <div className="phone__screen">
          <div className="app__top">
            <div>
              <span className="app__hello">Good afternoon</span>
              <span className="app__name">Amina</span>
            </div>
            <span className="app__bell">
              <BellIcon width={18} height={18} />
              <i />
            </span>
          </div>

          <div className="app__balance">
            <span className="app__label">Total savings</span>
            <span className="app__amount">
              <small>KES</small> {fmt(balance)}
            </span>
            <svg className="app__spark" viewBox="0 0 220 56" preserveAspectRatio="none">
              <path
                className="app__spark-line"
                d="M0 46 C 20 44, 30 36, 48 38 S 80 30, 100 24 S 140 28, 160 14 S 200 10, 220 4"
                pathLength={1}
              />
            </svg>
          </div>

          <div className="app__actions">
            <span>
              <i>
                <PlusIcon width={18} height={18} />
              </i>
              Save
            </span>
            <span>
              <i>
                <LoanIcon width={18} height={18} />
              </i>
              Borrow
            </span>
            <span>
              <i>
                <StatementIcon width={18} height={18} />
              </i>
              Statement
            </span>
          </div>

          <div className="app__loan">
            <div className="app__loan-head">
              <span>Development loan</span>
              <b>62% repaid</b>
            </div>
            <div className="app__bar">
              <span className="app__bar-fill" />
            </div>
          </div>

          <ul className="app__tx">
            {TRANSACTIONS.map((t) => (
              <li key={t.label}>
                <span>
                  <b>{t.label}</b>
                  <small>{t.date}</small>
                </span>
                <em className={t.positive ? 'pos' : 'neg'}>{t.amount}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="toast">
        <span className="toast__icon">
          <BellIcon width={16} height={16} />
        </span>
        <span>
          <b>Deposit received</b>
          <small>KES 5,000 added to your savings</small>
        </span>
      </div>
    </div>
  );
}
