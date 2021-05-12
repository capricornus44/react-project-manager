import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router';
import sprite from '../../../assets/icons/sprite.svg';
import { getProjectRequest } from '../../../redux/projects/projectActions';
import {
  changeTitleProject,
  getProjectsOperation,
} from '../../../redux/projects/projectOperations';
import { getProjects } from '../../../redux/projects/projectSelectors';
import { changeTitleSprint } from '../../../redux/sprints/sprintOperations';
import { getProjectTitle } from '../../../redux/sprints/sprintSelectors';
import TitleProjectDetails from './TitleProjectDescription/TitleProjectDescription';
import './TitleProjectForm.scss';

const TitleProjectForm = ({ projectId }) => {
  const dispatch = useDispatch();

  const allProjects = useSelector(getProjects);
  const thisProject = allProjects.find(project => project._id === projectId);
  const description = thisProject?.description;
  const title = thisProject?.title;

  const [newTitle, setNewTitle] = useState('');
  const [toogleInput, setToogleChange] = useState(true);

  const changeTitle = () => {
    !toogleInput &&
      dispatch(changeTitleProject({ id: projectId, title: newTitle }));
    toogleInputChange();
  };

  const handleChangeTitle = e => {
    setNewTitle(e.target.value);
  };

  const toogleInputChange = () => {
    setToogleChange(!toogleInput);
  };

  useEffect(() => {
    title && setNewTitle(title);
  }, [setNewTitle, title]);

  return (
    <>
      <div>
        <div className="edit-box">
          {toogleInput ? (
            <h2 className="project__details-title">{newTitle}</h2>
          ) : (
            <div className="edit-form__group">
              <input
                className="project__details-title_input"
                type="text"
                name={title}
                value={newTitle}
                placeholder=" "
                onChange={handleChangeTitle}
              />
              <label className="edit-form__label" htmlFor="title">
                Enter new title
              </label>
            </div>
          )}
          <button
            className="project__details-edit__button project__details-edit "
            type="submit"
            aria-label="edit button"
            onClick={changeTitle}
          >
            <svg className="project__details-edit__icon">
              <use href={sprite + '#edit'} />
            </svg>
          </button>
        </div>
        <TitleProjectDetails description={description} />
      </div>
    </>
  );
};

export default TitleProjectForm;
