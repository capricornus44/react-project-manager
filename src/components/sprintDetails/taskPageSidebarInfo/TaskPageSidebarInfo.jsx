import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getAllSprints } from '../../../redux/sprints/sprintSelectors';
import { LangContext } from '../../app/App';

import AddSprintForm from '../../projectDetails/addSprintForm/AddSprintForm';
// import './TaskPageSidebarInfo.scss';
import sprite from '../../../assets/icons/sprite.svg';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';

const TaskPageSidebarInfo = () => {
  const { language } = useContext(LangContext);
  const sprints = useSelector(getAllSprints);
  const projectId = useRouteMatch().params.projectId;
  const location = useLocation();

  return (
    <div className="sidebar__box">
      <NavLink
        className="sidebar__Btn_navlink"
        to={{
          pathname: `/projects/${projectId}`,
          state: { from: location },
        }}
      >
        <button type="button" className="sidebar__Btn">
          <svg className="sidebar__Btn_arrow">
            <use href={sprite + '#back-arrow'}></use>
          </svg>
          <span className="sidebar__Btn_text sidebar__text">
            {language.sprintPageSidebar.goBack}
          </span>
        </button>
      </NavLink>
      <ul className="sidebar__list">
        {sprints.map(sprint => (
          <li className="sidebar__list_item" key={sprint._id}>
            <NavLink
              className="sidebar__list_item"
              activeClassName="sidebar__list_item_selected"
              to={{
                pathname: `/projects/${projectId}/sprints/${sprint._id}`,
                state: { from: location },
              }}
            >
              <span className="sidebar__list_square"></span>
              <p className="sidebar__list_item_name sidebar__text">
                {sprint.title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="sidebar__addSprintForm_box">
        <div className="sidebar__addSprintFormBtn_box">
          <AddSprintForm />

          {/* <ModalHoc
            titleModal="Створення спринта"
            addOperation={addSprint}
            data={data}
          >
            <AddSprintData cb={setData} projectId={projectId} />
          </ModalHoc> */}
        </div>

        <p className="sidebar__addSprintForm_title sidebar__text">
          {language.sprintPageSidebar.addSprintButton}
        </p>
      </div>
    </div>
  );
};

export default TaskPageSidebarInfo;
