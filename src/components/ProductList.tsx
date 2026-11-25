import type { Product } from '../data/products';

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="plist">
      {products.map((p) => (
        <article key={p.name} className="prow">
          <div className="prow__main">
            <h2>{p.name}</h2>
            <p>{p.blurb}</p>
          </div>
          <dl className="prow__facts">
            {p.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </div>
  );
}
