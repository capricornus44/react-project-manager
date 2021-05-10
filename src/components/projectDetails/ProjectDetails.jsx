import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import AddMemberForm from './addMemberForm/AddMemberForm';
import AddSprintForm from './addSprintForm/AddSprintForm';
import SprintsList from './sprintsList/SprintsList';
import TitleProjectForm from './titleProjectForm/TitleProjectForm';
import "./ProjectDetails.scss"
import TitleProjectDetails from './titleProjectForm/TitleProjectDetails/TitleProjectDetails';
import SidebarPanel from '../shared/sidebarPanel/SidebarPanel';
import SidebarSprintPanel from './SidebarSprintPanel/SidebarSprintPanel';
import { getSprints } from '../../redux/sprints/sprintOperations';

const ProjectDetails = () => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getSprints())
    // }, [dispatch])

    return (
        <> <div className="project__details-form" >
            <SidebarPanel >
                <SidebarSprintPanel />
            </SidebarPanel>
            <div className="project__details-section">
                <div className="project__details">
                    <TitleProjectForm />
                    <AddSprintForm />
                </div>
                <TitleProjectDetails/>
                <AddMemberForm />
                <SprintsList />
            </div>
            </div>
        </>
    );
};

export default ProjectDetails;