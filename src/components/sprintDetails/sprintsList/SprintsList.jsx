import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from '../../../redux/tasks/taskOperations';
import { getTasksSelector } from '../../../redux/tasks/taskSelectors';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import GraphButton from '../../shared/graphButton/GraphButton';
import './SprintsList.scss';
import { useRouteMatch } from 'react-router';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import { getSprints } from '../../../redux/sprints/sprintOperations';
import GraphModal from '../../graph/GraphModal';

const SprintsList = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(getTasksSelector);
  const sprints = useSelector(getAllSprints);
  const sprintId = useRouteMatch().params.sprintId;
  const projectId = useRouteMatch().params.projectId;
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(getTask(sprintId));
    if (sprints.length) {
      return;
    }
    dispatch(getSprints(projectId));
  }, [dispatch, sprintId]);
  const openModal = () => {
    setShowModal(true);
    console.log(showModal);
  };
  return (
    <div className="sprintsList_box">
      <ul className="sprintsList">
        {allTasks.length > 0 &&
          allTasks.map(task => <SprintsListItem key={task._id} {...task} />)}
      </ul>
      {allTasks.length === 0 && (
        <h2 className="empty_title">
          Ваша колекція задач порожня, скористайтесь кнопкою "Створити задачу"
        </h2>
      )}
      {allTasks.length > 2 && (
        <div className="graphButton_box">
          <GraphButton openModal={openModal} />
          <GraphModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default SprintsList;
