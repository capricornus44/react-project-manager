import React from 'react';
import AddSprintForm from './AddSprintForm';
import './AddSprintForm.scss';

const AddSprint = () => {
  return (
    <div className="add__sprint-form">
      <AddSprintForm />
      <span className="add__sprint-button__name">Створити спринт</span>
    </div>
  );
};

export default AddSprint;
