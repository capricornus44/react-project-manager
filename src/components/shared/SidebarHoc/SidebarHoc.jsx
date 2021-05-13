import React from 'react';

import './SidebarHoc.scss';

const SidebarHoc = ({ children }) => {
  return <div className="sidebar-hoc">{children}</div>;
};

export default SidebarHoc;
