import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <>
      <PageHero title="Page not found" crumb="Not found" lead="That page does not exist or has moved." />
      <section className="page-body">
        <div className="container join-actions">
          <Link className="btn btn--red" to="/">
            Go to the home page
          </Link>
          <Link className="btn btn--ghost" to="/faqs">
            Read the FAQs
          </Link>
        </div>
      </section>
    </>
  );
}
