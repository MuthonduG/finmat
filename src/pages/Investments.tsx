import { BRAND } from '../config';
import PageHero from '../components/PageHero';
import ProductList from '../components/ProductList';
import { INVESTMENTS } from '../data/products';
import { usePageTitle } from '../usePageTitle';

export default function Investments() {
  usePageTitle('Investment products');
  return (
    <>
      <PageHero
        title="Investment products"
        crumb="Investment products"
        lead="Put your money to work with a fixed deposit or Capital Call."
      />
      <section className="page-body">
        <div className="container">
          <ProductList products={INVESTMENTS} />
          <aside className="note">
            <p>
              Other terms and conditions apply. To invest or ask about current terms, call {BRAND.phone} or email {BRAND.email}.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
