import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddMemberForm from './addMemberForm/AddMemberForm';
import AddSprintForm from './addSprintForm/AddSprintForm';
import SprintsList from './sprintsList/SprintsList';
import TitleProjectForm from './titleProjectForm/TitleProjectForm';
import './ProjectDetails.scss';
import TitleProjectDetails from './titleProjectForm/TitleProjectDescription/TitleProjectDescription';
import SidebarPanel from '../shared/sidebarPanel/SidebarPanel';
import SidebarSprintPanel from './SidebarSprintPanel/SidebarSprintPanel';
import { getSprints } from '../../redux/sprints/sprintOperations';
import { useLocation, useRouteMatch } from 'react-router';
import { getProjectsOperation } from '../../redux/projects/projectOperations';
import AddSprint from './addSprintForm/AddSprint';
import SidebarHoc from '../shared/SidebarHoc/SidebarHoc';
import { getProjects } from '../../redux/projects/projectSelectors';

import Spinner from '../spinner/Spinner';
import { getAllSprints } from '../../redux/sprints/sprintSelectors';
import SidebarSprintPanelList from '../shared/SidebarHoc/SidebarPanelList/SidebarSprintPanelList';
import SidebarSprintBackBtn from '../shared/SidebarHoc/SidebarBackBtn/SidebarSprintBackBtn';
import SidebarAddProject from '../shared/SidebarHoc/SidebarAddBtn/SidebarAddProject';

const ProjectDetails = () => {
  const dispatch = useDispatch();

  const match = useRouteMatch();

  // const projectId = match.params.projectId;

  const allProjects = useSelector(getProjects);
  // const sprints = useSelector(getAllSprints);
  console.log(allProjects);
  const projectId = useRouteMatch().params.projectId;

  const location = useLocation();
  const isLoading = useSelector(state => state.loader);

  useEffect(() => {
    dispatch(getProjectsOperation());
  }, [dispatch]);

  useEffect(() => {
    projectId && dispatch(getSprints(projectId));
  }, [dispatch, projectId]);

  return (
    <>
      {!isLoading ? (
        <>
          <div className="project__details-form">
            {/* <SidebarPanel>
          <SidebarSprintPanel />
        </SidebarPanel> */}
            <SidebarHoc>
              <SidebarSprintBackBtn />
              <SidebarSprintPanelList
                allProjects={allProjects}
                location={location}
              />
              <SidebarAddProject />
            </SidebarHoc>
            <div className="project__details-section">
              <div className="project__details">
                <TitleProjectForm projectId={projectId} />
                <AddSprint />
              </div>
              <AddMemberForm />
              <SprintsList projectId={projectId} />
            </div>
          </div>{' '}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProjectDetails;
