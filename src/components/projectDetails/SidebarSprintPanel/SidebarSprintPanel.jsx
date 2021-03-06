import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LangContext } from '../../app/App';
import sprite from '../../../assets/icons/sprite.svg';
import { useSelector } from 'react-redux';
import { getProjects } from '../../../redux/projects/projectSelectors';
import AddProjectBtn from '../../projects/addProjectBtn/AddProjectBtn';

const SidebarSprintPanel = () => {
  const { language } = useContext(LangContext);

  const allProjects = useSelector(getProjects);
  const location = useLocation();

  return (
    <>
      <div className="sidebar__box">
        <Link className="sidebar_btn_back" to={{ pathname: '/projects' }}>
          <button type="button" className="sidebar__Btn">
            <svg className="sidebar__Btn_arrow">
              <use href={sprite + '#back-arrow'}></use>
            </svg>
            <span className="sidebar__Btn_text sidebar__text">
              {language.projectPageSidebar.goBack}
            </span>
          </button>
        </Link>
        <ul className="sidebar__list sidebar__list-project">
          {allProjects.map(proj => (
            <li
              key={proj._id}
              className="sidebar-list__item-square sidebar__list_item"
            >
              <NavLink
                className="sidebar__list_item"
                activeClassName="sidebar__list_item_selected"
                to={{
                  pathname: `/projects/${proj._id}/`,
                  state: { from: location },
                }}
              >
                <p className="sidebar__list_item_name sidebar__text sidebar__list_item-sprint ">
                  {proj.title}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="sidebar__addSprintForm_box">
          <div className="sidebar__addSprintFormBtn_box">
            <AddProjectBtn />
          </div>
          <p className="sidebar__addSprintForm_title sidebar__text">
            {language.projectPageSidebar.addProjectButton}
          </p>
        </div>
      </div>
    </>
  );
};

export default SidebarSprintPanel;
