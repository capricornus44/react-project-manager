import React, { useContext } from 'react';
import { LangContext } from '../../../app/App';
import AddSprintForm from '../../../projectDetails/addSprintForm/AddSprintForm';
import './SidebarAddBtn.scss';

const SidebarAddSprint = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="sidebar__addSprintForm_box">
      <div className="sidebar__addSprintFormBtn_box">
        <AddSprintForm />
      </div>
      <p className="sidebar__addSprintForm_title sidebar__text">
        {language.sprintPageSidebar.addSprintButton}
      </p>
    </div>
  );
};

export default SidebarAddSprint;
