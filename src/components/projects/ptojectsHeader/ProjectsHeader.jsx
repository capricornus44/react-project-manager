import React, { useContext } from 'react';
import './ProjectsHeader.scss';
import { LangContext } from '../../app/App';
import AddProjectBtn from '../addProjectBtn/AddProjectBtn';

const ProjectsHeader = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="projects_header">
      <h2 className="projects_title">{language.projectsPage.pageTitle}</h2>
      <div className="projects_add">
        <AddProjectBtn />
        <p className="projects_add_text">{language.projectsPage.addButton}</p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
