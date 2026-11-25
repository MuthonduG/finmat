import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ProductList from '../components/ProductList';
import { SAVINGS } from '../data/products';
import { usePageTitle } from '../usePageTitle';

export default function Savings() {
  usePageTitle('Savings products');
  return (
    <>
      <PageHero
        title="Savings products"
        crumb="Savings products"
        lead="Four ways to save, starting at KES 500 a month. Your savings also decide how much you can borrow."
      />
      <section className="page-body">
        <div className="container">
          <ProductList products={SAVINGS} />
          <aside className="note">
            <p>
              Dividends are usually paid once a year, after the Annual General Meeting. Not sure which account fits?{' '}
              <Link to="/faqs" className="link-more">
                Read the FAQs
              </Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
