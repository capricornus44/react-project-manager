import React, { useContext } from 'react';
import AddSprintForm from './AddSprintForm';
import './AddSprintForm.scss';
import { LangContext } from '../../app/App';

const AddSprint = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="add__sprint-form">
      <AddSprintForm />
      <span className="add__sprint-button__name">
        {language.projectPage.addSprintButton}
      </span>
    </div>
  );
};

export default AddSprint;
