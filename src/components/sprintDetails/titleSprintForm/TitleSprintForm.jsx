import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/icons/sprite.svg';
import {
  changeTitleSprint,
  getSprints,
} from '../../../redux/sprints/sprintOperations.js';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import './TitleSprintForm.scss';
import { LangContext } from '../../app/App';

const TitleSprintForm = ({ sprintId }) => {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSprints());
  }, [dispatch]);

  const allSprints = useSelector(getAllSprints);

  const thisSprint = allSprints.find(sprint => sprint._id === sprintId);

  const title = thisSprint?.title || '';

  const [newTitle, setNewTitle] = useState('');
  const [toogleInput, setToogleChange] = useState(true);

  const changeTitle = () => {
    !toogleInput &&
      dispatch(changeTitleSprint({ id: sprintId, title: newTitle }));
    toogleInputChange();
  };

  const handleChangeTitle = e => {
    setNewTitle(e.target.value);
  };

  const toogleInputChange = () => {
    setToogleChange(!toogleInput);
  };

  return (
    <>
      <div>
        <h2 className="sprintsPageHeader__heading">
          {toogleInput ? (
            newTitle || title
          ) : (
            <input
              className="sprintsPageHeader__title_input"
              type="text"
              name={title}
              value={newTitle || title}
              required
              onChange={handleChangeTitle}
              placeholder={language.sprintPage.editProjectName}
            />
          )}
        </h2>
        <button
          className="sprintsPageHeader_editHeaderBtn"
          type="submit"
          aria-label="edit button"
          onClick={changeTitle}
        >
          <svg width="20" height="20">
            <use href={sprite + '#edit'}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default TitleSprintForm;
