import PageHero from '../components/PageHero';
import type { Person } from '../data/people';
import { usePageTitle } from '../usePageTitle';
import { initials, vars } from '../utils';

type PeoplePageProps = {
  title: string;
  crumb: string;
  lead: string;
  people: Person[];
};

export default function PeoplePage({ title, crumb, lead, people }: PeoplePageProps) {
  usePageTitle(title);
  const [first, ...rest] = people;

  const renderPerson = (p: Person, lead = false) => (
    <article key={p.name} className={`person ${lead ? 'person--lead' : ''}`}>
      {p.photo ? (
        <img className="person__avatar person__avatar--photo" src={p.photo} alt={p.name} />
      ) : (
        <span className="person__avatar" aria-hidden="true">
          {initials(p.name)}
        </span>
      )}
      <div className="person__text">
        <h2>{p.name}</h2>
        <p className="person__role">{p.role}</p>
        {p.bio && <p className="person__bio">{p.bio}</p>}
      </div>
    </article>
  );

  return (
    <>
      <PageHero title={title} crumb={crumb} lead={lead} />
      <section className="page-body">
        <div className="container people">
          {renderPerson(first, true)}
          <div className="people__grid" style={vars({ '--n': rest.length })}>
            {rest.map((p) => renderPerson(p))}
          </div>
        </div>
      </section>
    </>
  );
}
