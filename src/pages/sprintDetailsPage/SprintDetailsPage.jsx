import { useState } from 'react';
import SprintsPageHeader from '../../components/sprintDetails/SprintsPageHeader/SprintsPageHeader';
import SprintsList from '../../components/sprintDetails/sprintsList/SprintsList';
import './sprintDetailsPage.scss';
import { getAllSprints } from '../../redux/sprints/sprintSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router';
import { useEffect } from 'react';
import moment from 'moment';
import { getSprints } from '../../redux/sprints/sprintOperations';
import Container from '../../components/container/Container';
import SidebarHoc from '../../components/shared/SidebarHoc/SidebarHoc';
import SidebarTaskPanelList from '../../components/shared/SidebarHoc/SidebarPanelList/SidebarTaskPanelList';
import SidebarSprintBackBtn from '../../components/shared/SidebarHoc/SidebarBackBtn/SidebarSprintBackBtn';
import SidebarAddSprint from '../../components/shared/SidebarHoc/SidebarAddBtn/SidebarAddSprint';
import SidebarTaskBackBtn from '../../components/shared/SidebarHoc/SidebarBackBtn/SidebarTaskBackBtn';

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

  const location = useLocation();

  useEffect(() => {
    projectId && dispatch(getSprints(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    setDate(moment(startSprintDate).add(counter, 'days'));
  }, [counter, startSprintDate]);

  useEffect(() => {
    setCounter(curDay(startSprintDate));
  }, [curSprint, startSprintDate]);

  return (
    <Container>
      <div className="pageCont">
        {/* <SidebarPanel>
          <TaskPageSidebarInfo />
        </SidebarPanel> */}
        <SidebarHoc>
          <SidebarTaskBackBtn />
          <SidebarTaskPanelList allSprints={sprints} location={location} />
          <SidebarAddSprint />
        </SidebarHoc>
        <div className="task-wrapper">
          <SprintsPageHeader
            counter={counter}
            setCounter={setCounter}
            duration={curSprintDuration}
            curDate={moment(date).format('DD.MM.YYYY')}
            startSprintDate={startSprintDate}
          />
          <SprintsList curDate={moment(date).format('YYYY-MM-DD')} />
        </div>
      </div>
    </Container>
  );
};

export default SprintDetailsPage;
