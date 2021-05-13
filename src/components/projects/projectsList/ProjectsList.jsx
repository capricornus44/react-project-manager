import Spinner from '../../spinner/Spinner';
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsOperation } from '../../../redux/projects/projectOperations';
import { getProjects } from '../../../redux/projects/projectSelectors';
import ProjectsListItem from '../projectsListItem/ProjectsListItem';
import './ProjectsList.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup component="ul" className="projects_list">
        {allProjects.length > 0 &&
          allProjects.map(prodj => (
            <CSSTransition key={prodj._id} classNames="proj" timeout={250}>
              <ProjectsListItem {...prodj} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      {allProjects.length === 0 && (
        <h2 className="empty_title">
          {language.projectsPage.projectCollection}
        </h2>
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default ProjectsList;
