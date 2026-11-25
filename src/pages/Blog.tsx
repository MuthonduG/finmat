import { BRAND } from '../config';
import PageHero from '../components/PageHero';
import { POSTS } from '../data/blog';
import { usePageTitle } from '../usePageTitle';

export default function Blog() {
  usePageTitle('Blog');
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        title="The finmat blog"
        crumb="Blog"
        lead="Notes on saving with intention, borrowing wisely and the life of the sacco."
      />
      <section className="page-body">
        <div className="container">
          <a className="blog-featured" href={featured.url} target="_blank" rel="noreferrer">
            <time>{featured.date}</time>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className="link-more">Read the full post</span>
          </a>

          <ul className="blog-list">
            {rest.map((p) => (
              <li key={p.title}>
                <a href={p.url} target="_blank" rel="noreferrer" className="blog-row">
                  <time>{p.date}</time>
                  <span className="blog-row__text">
                    <h2>{p.title}</h2>
                    <p>{p.excerpt}</p>
                  </span>
                  <span className="blog-row__by">{p.author}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="blog-more">
            Looking for older posts?{' '}
            <a className="link-more" href={`${BRAND.oldSiteUrl}/blog/`} target="_blank" rel="noreferrer">
              Browse the full archive
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
