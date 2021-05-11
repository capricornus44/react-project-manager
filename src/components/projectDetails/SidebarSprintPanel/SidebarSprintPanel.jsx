import React, { useContext } from 'react';
import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import { LangContext } from '../../app/App';
import sprite from '../../../assets/icons/sprite.svg';
import '../../sprintDetails/taskPageSidebarInfo/TaskPageSidebarInfo.scss';
import { useSelector } from 'react-redux';
import AddSprintForm from '../addSprintForm/AddSprintForm';
import { getProjects } from '../../../redux/projects/projectSelectors';

const SidebarSprintPanel = () => {
  const { language } = useContext(LangContext);

  const allProjects = useSelector(getProjects);
  const projectId = useRouteMatch().params.projectId;
  // const location = useLocation()

  console.log(allProjects);
  return (
    <>
      <div className="sidebar__box">
        <Link to={{ pathname: '/projects' }}>
          <button type="button" className="sidebar__Btn">
            <svg className="sidebar__Btn_arrow">
              <use href={sprite + '#back-arrow'}></use>
            </svg>
            <span className="sidebar__Btn_text sidebar__text">
              {language.projectPageSidebar.goBack}
            </span>
          </button>
        </Link>
        <ul className="sidebar__list">
          {allProjects.map(sprint => (
            <li className="sidebar__list_item" key={sprint._id}>
              <NavLink
                className="sidebar__list_item"
                activeClassName="sidebar__list_item_selected"
                to={{
                  pathname: `/projects/${projectId}/`,
                  // state: { from: location },
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
          </div>
          <p className="sidebar__addSprintForm_title sidebar__text">
            Створити проект
          </p>
        </div>
      </div>
    </>
  );
};

export default SidebarSprintPanel;
