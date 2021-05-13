import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LangContext } from '../../../app/App';
import './SidebarSprintBackBtn.scss';

const SidebarSprintBackBtn = () => {
  const { language } = useContext(LangContext);
  const location = useLocation();

  return (
    <>
      <NavLink
        className="sidebar_btn_back"
        to={{
          pathname: `/projects}`,
          state: { from: location },
        }}
      >
        <span className="sidebar__Btn_text sidebar__text sidebar__arrow">
          {language.projectPageSidebar.goBack}
        </span>
      </NavLink>
    </>
  );
};

export default SidebarSprintBackBtn;
