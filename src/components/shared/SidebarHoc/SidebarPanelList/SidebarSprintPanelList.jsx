import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarSprintPanelList.scss';

const SidebarSprintPanelList = ({ allProjects, location }) => {
  return (
    <>
      <ul className="sidebar__list">
        {allProjects.map(proj => (
          <li key={proj._id} className="sidebar__item-square sidebar__item">
            <NavLink
              className="sidebar__link"
              activeClassName="sidebar__list_item_selected"
              to={{
                pathname: `/projects/${proj._id}/`,
                state: { from: location },
              }}
            >
              <p className="sidebar__item-name sidebar__text">{proj.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarSprintPanelList;
