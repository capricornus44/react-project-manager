import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../../redux/tasks/taskOperations';
import { getTasksSelector } from '../../../redux/tasks/taskSelectors';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import './SprintsList.scss';

const SprintsList = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(getTasksSelector);

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  return (
    <ul className="sprintsList">
      {allTasks.length > 0 &&
        allTasks.map(task => <SprintsListItem key={task._id} {...task} />)}
      {allTasks.length === 0 && (
        <h2 className="empty_title">
          Ваша колекція задач порожня, скористайтесь кнопкою "Створити задачу"
        </h2>
      )}
    </ul>
  );
};

export default SprintsList;
