import { BRAND, GOVERNING_LAW } from '../config';
import PageHero from '../components/PageHero';
import { TERMS_BEFORE_LAW, TERMS_LAST_UPDATED, type TermsSection } from '../data/terms';
import { usePageTitle } from '../usePageTitle';

function buildSections(): TermsSection[] {
  const sections = [...TERMS_BEFORE_LAW];
  if (GOVERNING_LAW) {
    sections.push({
      title: 'Governing law',
      body: `These terms are governed by the laws of ${GOVERNING_LAW}. Disputes fall under the exclusive jurisdiction of the courts of ${GOVERNING_LAW}.`,
    });
  }
  sections.push({
    title: 'Contact information',
    body: `Questions about these terms can be sent to ${BRAND.email}.`,
  });
  return sections;
}

export default function Terms() {
  usePageTitle('Terms and conditions');
  const sections = buildSections();

  return (
    <>
      <PageHero
        title="Terms and conditions"
        crumb="Terms and conditions"
        lead={`The terms for using the Finmat Sacco website. Last updated ${TERMS_LAST_UPDATED}.`}
      />
      <section className="page-body">
        <div className="container terms">
          <nav className="terms__toc" aria-label="Sections">
            <ol>
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#terms-${i + 1}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="terms__body">
            {sections.map((s, i) => (
              <section key={s.title} id={`terms-${i + 1}`}>
                <h2>
                  <span>{i + 1}.</span> {s.title}
                </h2>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
