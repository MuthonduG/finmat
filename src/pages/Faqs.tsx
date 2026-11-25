import Accordion from '../components/Accordion';
import PageHero from '../components/PageHero';
import { FAQ_CATEGORIES, SHARE_CAPITAL_EXPLAINER } from '../data/faqs';
import { usePageTitle } from '../usePageTitle';

export default function Faqs() {
  usePageTitle('FAQs');
  return (
    <>
      <PageHero
        title="Frequently asked questions"
        crumb="FAQs"
        lead="Answers on joining, saving, borrowing and leaving."
      />
      <section className="page-body">
        <div className="container faqpage">
          <nav className="faqpage__nav" aria-label="FAQ topics">
            {FAQ_CATEGORIES.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                {c.title}
              </a>
            ))}
          </nav>

          <div className="faqpage__content">
            {FAQ_CATEGORIES.map((c) => (
              <section key={c.id} id={c.id} className="faqpage__group">
                <h2>{c.title}</h2>
                <Accordion items={c.items} idPrefix={`faq-${c.id}`} />
              </section>
            ))}

            <aside className="note">
              <h2>{SHARE_CAPITAL_EXPLAINER.title}</h2>
              <p>{SHARE_CAPITAL_EXPLAINER.text}</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
