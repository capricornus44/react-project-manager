import React from 'react';
import SprintsList from './sprintsList/SprintsList';
import TitleProjectForm from './titleProjectForm/TitleProjectForm';

const ProjectDetails = () => {
    return (
        <>
            <TitleProjectForm />
            <SprintsList />
        </>
    );
};

export default ProjectDetails;