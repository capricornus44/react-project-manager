import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSprints } from '../../../redux/sprints/sprintOperations';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import SprintsListItem from '../sprintsListItem/SprintsListItem';
import './SprintsList.scss';
import { LangContext } from '../../app/App';

const SprintsList = ({ projectId }) => {
  const dispatch = useDispatch();
  const allSprints = useSelector(getAllSprints);
  const { language } = useContext(LangContext);
  // useEffect(() => {
  //     // console.log("2")
  //     dispatch(getSprints())
  // }, [allSprints.length])

  // console.log(allSprints)
  useEffect(() => {
    dispatch(getSprints(projectId));
  }, [dispatch]);

  // console.log(allSprints)

  // console.log(id)

  return (
    <>
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
    </>
  );
};

export default SprintsList;
