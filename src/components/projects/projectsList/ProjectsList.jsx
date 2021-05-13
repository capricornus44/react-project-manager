import Spinner from '../../spinner/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsOperation } from '../../../redux/projects/projectOperations';
import { getProjects } from '../../../redux/projects/projectSelectors';
import ProjectsListItem from '../projectsListItem/ProjectsListItem';
import './ProjectsList.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectsList = () => {
  const allProjects = useSelector(getProjects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsOperation());
  }, [dispatch]);

  const isLoading = useSelector(state => state.loader);

  return (
    <>
      <TransitionGroup component="ul" className="projects_list">
        {allProjects.length > 0 &&
          allProjects.map(prodj => (
            <CSSTransition
              key={prodj._id}
              classNames="proj"
              timeout={2000}
              // in={true}
            >
              <ProjectsListItem {...prodj} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      {allProjects.length === 0 && (
        <h2 className="empty_title">
          Ваша колекція проектів порожня, скористайтесь кнопкою "Створити
          проект"
        </h2>
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default ProjectsList;
