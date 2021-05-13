import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import './SprintsList.scss';
import { LangContext } from '../../app/App';
import Spinner from '../../spinner/Spinner';

const SprintsList = ({ projectId }) => {
  const isLoading = useSelector(state => state.loader);
  const allSprints = useSelector(getAllSprints);
  const { language } = useContext(LangContext);

  return (
    <>
      {!isLoading ? (
        <ul className="sprint-list">
          {allSprints.length > 0 &&
            allSprints.map(elem => (
              <SprintsListItem key={elem._id} projectId={projectId} {...elem} />
            ))}
          {allSprints.length === 0 && (
            <h2 className="empty_title">
              {language.projectPage.sprintCollection}
            </h2>
          )}
        </ul>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SprintsList;
