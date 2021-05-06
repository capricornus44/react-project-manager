import React from 'react';
import ProjectsList from '../../components/projects/projectsList/ProjectsList';
import ProjectsHeader from '../../components/projects/ptojectsHeader/ProjectsHeader';
import Container from '../../components/container/Container';

const ProjectsPage = () => {
  return (
    <Container>
      <ProjectsHeader />
      <ProjectsList />
    </Container>
  );
};

export default ProjectsPage;
