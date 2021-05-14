import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/icons/sprite.svg';
import { changeTitleSprint } from '../../../redux/sprints/sprintOperations.js';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import { LangContext } from '../../app/App';
import '../../projectDetails/titleProjectForm/TitleProjectForm.scss';

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
      <div className="edit-box">
        {!isInput ? (
          <h2 className="project__details-title">{newTitle}</h2>
        ) : (
          <div className="edit-form__title__input">
            <input
              className="project__details-title__input"
              type="text"
              name={title}
              value={newTitle}
              required
              onChange={handleChangeTitle}
              placeholder={language.sprintPage.editProjectName}
            />
            <label className="edit-form__label" htmlFor="title">
              Enter new title
            </label>
          </div>
        )}

        <button
          className="project__details-edit__button project__details-edit"
          type="submit"
          aria-label="edit button"
          onClick={changeTitle}
        >
          <svg className="project__details-edit__icon">
            <use href={sprite + '#edit'} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TitleSprintForm;
