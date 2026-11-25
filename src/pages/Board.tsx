import { BOARD } from '../data/people';
import PeoplePage from './PeoplePage';

export default function Board() {
  return (
    <PeoplePage
      title="Board members"
      crumb="Board members"
      lead="The people elected by members to guide Finmat Sacco and keep it accountable."
      people={BOARD}
    />
  );
}
