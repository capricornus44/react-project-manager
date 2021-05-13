import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import './SprintsList.scss';
import { LangContext } from '../../app/App';
import Spinner from '../../spinner/Spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { useDispatch } from 'react-redux';
// import { getSprints } from '../../../redux/sprints/sprintOperations';

const SprintsList = ({ projectId }) => {
  const isLoading = useSelector(state => state.loader);
  const allSprints = useSelector(getAllSprints);
  const { language } = useContext(LangContext);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSprints(projectId));
  // }, [dispatch, projectId]);

  return (
    <>
      <TransitionGroup component="ul" className="sprint-list">
        {allSprints.length > 0 &&
          allSprints.map(elem => (
            <CSSTransition key={elem._id} classNames="sprint" timeout={2000}>
              <SprintsListItem projectId={projectId} {...elem} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      {allSprints.length === 0 && (
        <h2 className="empty_title">{language.projectPage.sprintCollection}</h2>
      )}

      {isLoading && <Spinner />}
    </>
  );
};

export default SprintsList;
