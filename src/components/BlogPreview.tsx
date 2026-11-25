import { Link } from 'react-router-dom';
import { POSTS } from '../data/blog';

export default function BlogPreview() {
  const latest = POSTS.slice(0, 3);

  return (
    <section className="section" id="news">
      <div className="container">
        <div className="section__head section__head--row">
          <h2>From the finmat blog</h2>
          <Link to="/blog" className="link-more">
            All articles
          </Link>
        </div>

        <ul className="bposts">
          {latest.map((p) => (
            <li key={p.title}>
              <a href={p.url} target="_blank" rel="noreferrer" className="bposts__item">
                <time>{p.date}</time>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
