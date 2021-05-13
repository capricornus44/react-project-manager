import React, { useContext } from 'react';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import { LangContext } from '../../../app/App';
import './SidebarTaskBackBtn.scss';

const SidebarTaskBackBtn = () => {
  const { language } = useContext(LangContext);
  const location = useLocation();
  const projectId = useRouteMatch().params.projectId;

  return (
    <>
      <NavLink
        className="sidebar-task_btn_back"
        to={{ pathname: `/projects/${projectId}`, state: { from: location } }}
      >
        <span className="sidebar-task__Btn_text sidebar__text sidebar-task__arrow">
          {language.sprintPageSidebar.goBack}
        </span>
      </NavLink>
    </>
  );
};

export default SidebarTaskBackBtn;
