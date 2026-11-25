import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../config';
import { useInView } from '../hooks';
import { vars } from '../utils';
import { BellIcon, LoanIcon, PiggyIcon, ShieldIcon, StatementIcon } from './Icons';
import { INVESTMENTS, LOANS, SAVINGS } from '../data/products';

type Tile = {
  title: string;
  text: string;
  icon: ReactNode;
  size: 'wide' | 'tall' | 'std';
  to?: string;
  href?: string;
};

const TILES: Tile[] = [
  {
    title: 'Savings',
    text: `${SAVINGS.length} ways to save, starting at KES 500 a month. Build your share capital and earn dividends.`,
    icon: <PiggyIcon />,
    size: 'wide',
    to: '/savings-products',
  },
  {
    title: 'Loans',
    text: `${LOANS.length} loans for business, school fees, assets and everyday needs, from a Quick Loan of up to KES 10,000 to a Development Loan of up to KES 300,000.`,
    icon: <LoanIcon />,
    size: 'tall',
    to: '/loan-products',
  },
  {
    title: 'Investments',
    text: `${INVESTMENTS.length} ways to grow your money, with fixed deposits from KES 20,000.`,
    icon: <StatementIcon />,
    size: 'std',
    to: '/investment-products',
  },
  {
    title: 'Finmat Friends Welfare',
    text: 'Member-run support when a member faces bereavement.',
    icon: <ShieldIcon />,
    size: 'std',
    to: '/welfare',
  },
  {
    title: 'The finmat app',
    text: 'Apply for a Quick Loan in the Finmat App. Available on Android and iPhone.',
    icon: <BellIcon />,
    size: 'wide',
    href: BRAND.playStoreUrl,
  },
  {
    title: 'Financial education',
    text: 'Finmat holds financial education days for members on a regular basis.',
    icon: <StatementIcon />,
    size: 'std',
  },
];

function TileBody({ tile }: { tile: Tile }) {
  return (
    <>
      <span className="bento__icon">{tile.icon}</span>
      <h3>{tile.title}</h3>
      <p>{tile.text}</p>
    </>
  );
}

export default function ProductTiles() {
  const { ref, seen } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section__head">
          <h2>Everything your money needs, under one roof</h2>
          <p>Save, borrow, invest and look after each other. Choose a tile to see the details.</p>
        </div>

        <div ref={ref} className={`bento ${seen ? 'is-in' : ''}`}>
          {TILES.map((t, i) => {
            const className = `bento__item bento__item--${t.size}`;
            const style = vars({ '--i': i });
            if (t.to) {
              return (
                <Link key={t.title} to={t.to} className={className} style={style}>
                  <TileBody tile={t} />
                </Link>
              );
            }
            if (t.href) {
              return (
                <a key={t.title} href={t.href} target="_blank" rel="noreferrer" className={className} style={style}>
                  <TileBody tile={t} />
                </a>
              );
            }
            return (
              <article key={t.title} className={className} style={style}>
                <TileBody tile={t} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
