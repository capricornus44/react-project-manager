import React from 'react';
import Container from '../container/Container';
import AddMemberForm from './addMemberForm/AddMemberForm';
import SprintsList from './sprintsList/SprintsList';
import TitleProjectForm from './titleProjectForm/TitleProjectForm';

const ProjectDetails = () => {
    return (
        <>
            <TitleProjectForm />
            <AddMemberForm />
            <SprintsList />
        </>
    );
};

export default ProjectDetails;