import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsOperation } from '../../../redux/projects/projectOperations';
import { getProjects } from '../../../redux/projects/projectSelectors';
import ProjectsListItem from '../projectsListItem/ProjectsListItem';
import './ProjectsList.scss';

const ProjectsList = () => {
  const allProjects = useSelector(getProjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsOperation());
  }, [dispatch]);

  return (
    <>
      <ul className="projects_list">
        {allProjects.length > 0 &&
          allProjects.map(prodj => (
            <ProjectsListItem key={prodj._id} {...prodj} />
          ))}
      </ul>
      {allProjects.length === 0 && (
        <h2 className="empty_title">
          Ваша колекція проектів порожня, скористайтесь кнопкою "Створити
          проект"
        </h2>
      )}
    </>
  );
};

export default ProjectsList;
