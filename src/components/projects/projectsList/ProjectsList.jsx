import React from 'react';
import ProjectsListItem from '../projectsListItem/ProjectsListItem';
import './ProjectsList.scss';

const ProjectsList = ({ projects }) => {
  return (
    <ul className="projects_list">
      <ProjectsListItem />
    </ul>
  );
};

export default ProjectsList;
