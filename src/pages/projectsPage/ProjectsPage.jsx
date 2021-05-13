import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/container/Container';
import ProjectWrapper from '../../components/projects/projectWrapper/ProjectWrapper';

const ProjectsPage = () => {
  return (
    <Container>
      <ProjectWrapper />
    </Container>
  );
};

export default ProjectsPage;
