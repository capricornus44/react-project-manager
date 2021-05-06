import React from 'react';
import AddMemberForm from './addMemberForm/AddMemberForm';
import AddSprintForm from './addSprintForm/AddSprintForm';
import SprintsList from './sprintsList/SprintsList';
import TitleProjectForm from './titleProjectForm/TitleProjectForm';
import "./ProjectDetails.scss"
import TitleProjectDetails from './titleProjectForm/TitleProjectDetails/TitleProjectDetails';

const ProjectDetails = () => {
    return (
        <>
            <div className="project-details">
                <TitleProjectForm />
                <AddSprintForm />
            </div>
            <TitleProjectDetails/>
            <AddMemberForm />
            <SprintsList />
        </>
    );
};

export default ProjectDetails;