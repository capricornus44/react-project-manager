import React, { useContext } from 'react';
import { LangContext } from '../../app/App';

const SidebarSprintPanel = () => {
  const { language } = useContext(LangContext);
  return (
    <>
      <button>{language.projectPageSidebar.goBack}</button>
    </>
  );
};

export default SidebarSprintPanel;
