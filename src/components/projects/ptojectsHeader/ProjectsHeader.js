import React from 'react';
import './ProjectsHeader.scss';
import AddButton from '../../shared/addButton/AddButton';

const ProjectsHeader = () => {
  return (
    <div className="projects_header">
      <h2 className="projects_title">Проекти</h2>
      <div className="projects_add">
        <AddButton />
        <p className="projects_add_text">Створити проект</p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
