import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './SidebarTaskPanelList.scss';

const SidebarTaskPanelList = ({ allSprints, location }) => {
  const projectId = useRouteMatch().params.projectId;

  return (
    <>
      <ul className="sidebar-task__list">
        {allSprints.map(sprint => (
          <li
            key={sprint._id}
            className="sidebar-task__item-square sidebar__item"
          >
            <NavLink
              className="sidebar-task__link"
              activeClassName="sidebar-task__list_item_selected"
              to={{
                pathname: `/projects/${projectId}/sprints/${sprint._id}`,
                state: { from: location },
              }}
            >
              <p className="sidebar-task__item-name sidebar__text">
                {sprint.title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarTaskPanelList;
