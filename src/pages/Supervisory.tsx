import { SUPERVISORY } from '../data/people';
import PeoplePage from './PeoplePage';

export default function Supervisory() {
  return (
    <PeoplePage
      title="Supervisory committee"
      crumb="Supervisory committee"
      lead="The committee that oversees how Finmat Sacco is run, on behalf of its members."
      people={SUPERVISORY}
    />
  );
}
