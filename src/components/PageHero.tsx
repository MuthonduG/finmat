import { Link } from 'react-router-dom';
import { vars } from '../utils';

type PageHeroProps = {
  title: string;
  crumb: string;
  lead?: string;
};

export default function PageHero({ title, crumb, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="crumbs rise" style={vars({ '--d': '0ms' })} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="rise" style={vars({ '--d': '80ms' })}>
          {title}
        </h1>
        {lead && (
          <p className="page-hero__lead rise" style={vars({ '--d': '160ms' })}>
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
