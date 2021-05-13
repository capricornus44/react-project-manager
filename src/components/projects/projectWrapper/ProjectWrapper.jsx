import React from 'react';

import ProjectsList from '../projectsList/ProjectsList';
import ProjectsHeader from '../ptojectsHeader/ProjectsHeader';
import './ProjWrapper.scss';

const ProjectWrapper = () => {
  return (
    <div className="proj_wrapper">
      <ProjectsHeader />

      <ProjectsList />
    </div>
  );
};

export default ProjectWrapper;
