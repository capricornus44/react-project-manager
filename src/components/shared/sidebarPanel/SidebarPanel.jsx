import React from 'react';
import './SidebarPanel.scss';
// import SprintsList from '../../projectDetails/sprintsList/SprintsList';
// import ProjectsList from '../../projects/projectsList/ProjectsList';

const SidebarPanel = ({ children }) => {
  return <div className="sidebar-wrapper">{children}</div>;
};

export default SidebarPanel;
