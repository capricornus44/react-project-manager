import { useState } from 'react';
import SprintsPageHeader from '../../components/sprintDetails/SprintsPageHeader/SprintsPageHeader';
import SprintsList from '../../components/sprintDetails/sprintsList/SprintsList';
import SidebarPanel from '../../components/shared/sidebarPanel/SidebarPanel';
import './sprintDetailsPage.scss';
import { getAllSprints } from '../../redux/sprints/sprintSelectors';
import TaskPageSidebarInfo from '../../components/sprintDetails/taskPageSidebarInfo/TaskPageSidebarInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { useEffect } from 'react';
import moment from 'moment';
import { getSprints } from '../../redux/sprints/sprintOperations';

const curDay = startDate => moment().diff(moment(startDate), 'days');

const SprintDetailsPage = () => {
  const dispatch = useDispatch();
  const { sprintId, projectId } = useRouteMatch().params;
  const sprints = useSelector(getAllSprints);
  const curSprint = sprints?.find(sprint => sprint._id === sprintId);
  const curSprintDuration = curSprint?.duration;
  const startSprintDate = curSprint?.startDate;

  const [counter, setCounter] = useState(curDay(startSprintDate));
  const [date, setDate] = useState(Date.now());

  // console.log(projectId);

  useEffect(() => {
    projectId && dispatch(getSprints(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    setDate(moment(startSprintDate).add(counter, 'days').format('DD.MM.YYYY'));
  }, [counter]);

  return (
    <div className="pageCont">
      <SidebarPanel>
        <TaskPageSidebarInfo />
      </SidebarPanel>
      <div>
        <SprintsPageHeader
          counter={counter}
          setCounter={setCounter}
          duration={curSprintDuration}
          curDate={date}
          startSprintDate={startSprintDate}
        />
        <SprintsList />
      </div>
    </div>
  );
};

export default SprintDetailsPage;
