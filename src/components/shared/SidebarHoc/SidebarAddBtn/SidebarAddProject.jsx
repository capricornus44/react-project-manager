import React, { useContext } from 'react';
import { LangContext } from '../../../app/App';
import AddProjectBtn from '../../../projects/addProjectBtn/AddProjectBtn';
import './SidebarAddBtn.scss';

const SidebarAddProject = () => {
  const { language } = useContext(LangContext);

  return (
    <div className="sidebar__addSprintForm_box">
      <div className="sidebar__addSprintFormBtn_box">
        <AddProjectBtn />
      </div>
      <p className="sidebar__addSprintForm_title sidebar__text">
        {language.projectPageSidebar.addProjectButton}
      </p>
    </div>
  );
};

export default SidebarAddProject;
