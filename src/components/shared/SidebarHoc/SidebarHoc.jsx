import { Link } from '@material-ui/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';
import { LangContext } from '../../app/App';
import AddProjectBtn from '../../projects/addProjectBtn/AddProjectBtn';
import './SidebarHoc.scss';

const SidebarHoc = ({ allProjects, location }) => {
  const { language } = useContext(LangContext);

  return (
    <div className="sidebar-hoc">
      <div className="sidebar-wrapper">
        <div className="sidebar__box">
          <div className="sidebar__back-btn-group">
            <Link className="sidebar_btn_back" to={{ pathname: '/projects' }}>
              <button type="button" className="sidebar__Btn">
                {/* <svg className="sidebar__Btn_arrow">
                <use href={sprite + '#back-arrow'}></use>
              </svg> */}
                <span className="sidebar__Btn_text sidebar__text">
                  {language.projectPageSidebar.goBack}
                </span>
              </button>
            </Link>
          </div>
          <ul className="sidebar__list">
            {allProjects.map(proj => (
              <li
                key={proj._id}
                className="sidebar__item-square sidebar__list_item"
              >
                <NavLink
                  className="sidebar__list_item"
                  activeClassName="sidebar__list_item_selected"
                  to={{
                    pathname: `/projects/${proj._id}/`,
                    state: { from: location },
                  }}
                >
                  <p className="sidebar__list_item_name sidebar__text">
                    {proj.title}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__addSprintForm_box">
        <div className="sidebar__addSprintFormBtn_box">
          <AddProjectBtn />
        </div>
        <p className="sidebar__addSprintForm_title sidebar__text">
          {language.projectPageSidebar.addProjectButton}
        </p>
      </div>
    </div>
  );
};

export default SidebarHoc;
