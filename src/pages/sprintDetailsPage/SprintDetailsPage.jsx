import SprintsPageHeader from '../../components/sprintDetails/SprintsPageHeader/SprintsPageHeader';
import SprintsList from '../../components/sprintDetails/sprintsList/SprintsList';
import SidebarPanel from '../../components/shared/sidebarPanel/SidebarPanel';
import './sprintDetailsPage.scss';
import TaskPageSidebarInfo from '../../components/sprintDetails/taskPageSidebarInfo/TaskPageSidebarInfo';

const sprintDetailsPage = () => {
  return (
    <div className="pageCont">
      <SidebarPanel>
        <TaskPageSidebarInfo />
      </SidebarPanel>
      <div>
        <SprintsPageHeader />
        <SprintsList />
      </div>
    </div>
  );
};

export default sprintDetailsPage;
