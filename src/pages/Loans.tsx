import { Link } from 'react-router-dom';
import { BRAND } from '../config';
import PageHero from '../components/PageHero';
import ProductList from '../components/ProductList';
import { LOANS } from '../data/products';
import { usePageTitle } from '../usePageTitle';

export default function Loans() {
  usePageTitle('Loan products');
  return (
    <>
      <PageHero
        title="Loan products"
        crumb="Loan products"
        lead="Six loans for work, school fees, assets and everyday needs, built around what you have saved."
      />
      <section className="page-body">
        <div className="container">
          <ProductList products={LOANS} />
          <aside className="note">
            <h2>Good to know</h2>
            <ul>
              <li>Members can typically borrow up to three times their savings.</li>
              <li>You can repay early without penalty.</li>
              <li>Members with a good repayment history can top up a loan or hold more than one loan.</li>
              <li>
                Interest rates vary by loan type. Call {BRAND.phone} or email {BRAND.email} for the current rate on the loan you want.
              </li>
            </ul>
            <p>
              More questions?{' '}
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
