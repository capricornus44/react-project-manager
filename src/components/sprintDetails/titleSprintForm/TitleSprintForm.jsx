import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/icons/sprite.svg';
import { changeTitleSprint } from '../../../redux/sprints/sprintOperations.js';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import './TitleSprintForm.scss';
import { LangContext } from '../../app/App';

const TitleSprintForm = ({ sprintId }) => {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  const allSprints = useSelector(getAllSprints);

  const thisSprint = allSprints.find(sprint => sprint._id === sprintId);

  const title = thisSprint?.title;

  const [newTitle, setNewTitle] = useState('');
  const [isInput, setIsInput] = useState(false);

  const changeTitle = () => {
    isInput && dispatch(changeTitleSprint({ id: sprintId, title: newTitle }));
    toogleInputChange();
  };

  const handleChangeTitle = e => {
    setNewTitle(e.target.value);
  };

  const toogleInputChange = () => {
    setIsInput(!isInput);
  };

  useEffect(() => {
    title && setNewTitle(title);
  }, [setNewTitle, title]);

  return (
    <>
      <div>
        {!isInput ? (
          <h2 className="sprintsPageHeader__heading">{newTitle}</h2>
        ) : (
          <input
            className="sprintsPageHeader__title_input"
            type="text"
            name={title}
            value={newTitle}
            required
            onChange={handleChangeTitle}
            placeholder={language.sprintPage.editProjectName}
          />
        )}

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
