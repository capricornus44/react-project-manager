import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../../redux/tasks/taskOperations';
import { getTasksSelector } from '../../../redux/tasks/taskSelectors';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import './SprintsList.scss';

const SprintsList = () => {
  const allTasks = useSelector(getTasksSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  return (
    <ul className="sprintsList">
      {allTasks.length > 0 &&
        allTasks.map(task => <SprintsListItem key={task._id} {...task} />)}
    </ul>
  );
};

export default SprintsList;
