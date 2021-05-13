import Spinner from '../../spinner/Spinner';
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsOperation } from '../../../redux/projects/projectOperations';
import { getProjects } from '../../../redux/projects/projectSelectors';
import ProjectsListItem from '../projectsListItem/ProjectsListItem';
import './ProjectsList.scss';
import { LangContext } from '../../app/App';

const ProjectsList = () => {
  const { language } = useContext(LangContext);
  const allProjects = useSelector(getProjects);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.loader);

  useEffect(() => {
    dispatch(getProjectsOperation());
  }, [dispatch]);

  return (
    <>
      {!isLoading ? (
        <>
          <ul className="projects_list">
            {allProjects.length > 0 &&
              allProjects.map(prodj => (
                <ProjectsListItem key={prodj._id} {...prodj} />
              ))}
          </ul>
          {allProjects.length === 0 && (
            <h2 className="empty_title">
              {language.projectsPage.projectCollection}
            </h2>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProjectsList;
