import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/container/Container';
import ProjectDetails from '../../components/projectDetails/ProjectDetails';
import { getProjectsOperation } from '../../redux/projects/projectOperations';

const ProjectDetailsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsOperation());
  }, [dispatch]);

  return (
    <Container>
      <ProjectDetails />
    </Container>
  );
};

export default ProjectDetailsPage;
