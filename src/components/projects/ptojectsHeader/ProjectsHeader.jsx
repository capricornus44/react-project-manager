import React from 'react';
import './ProjectsHeader.scss';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';

const ProjectsHeader = () => {
  return (
    <div className="projects_header">
      <h2 className="projects_title">Проекти</h2>
      <div className="projects_add">
        <ModalHoc title="Створити проект">
          <h2>ashjdgaj</h2>
        </ModalHoc>
      </div>
    </div>
  );
};

export default ProjectsHeader;
