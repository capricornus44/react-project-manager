import SprintsListItem from '../sprintsListItem/SprintsListItem';
import './SprintsList.scss';

const SprintsList = ({ sprints }) => {
  return (
    <ul className="sprintsList">
      <SprintsListItem />
    </ul>
  );
};

export default SprintsList;
