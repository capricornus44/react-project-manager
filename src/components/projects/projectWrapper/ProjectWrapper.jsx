import React from 'react';

import ProjectsList from '../projectsList/ProjectsList';
import ProjectsHeader from '../ptojectsHeader/ProjectsHeader';
import './ProjWrapper.scss';

const ProjectWrapper = () => {
  // const projects = useSelector(state => state.projects);

  return (
    <div className="proj_wrapper">
      <ProjectsHeader />
      <ProjectsList />
      {/* {projects.length > 0 ? (
        <ProjectsList />
      ) : (
        <h2 className="proj_default">
          Ваша колекція проектів порожня, скористайтесь кнопкою "Створити
          проект"
        </h2>
      )} */}
    </div>
  );
};

export default ProjectWrapper;
