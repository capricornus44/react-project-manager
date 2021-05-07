import React from 'react';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import './AddSprintForm.scss';

const AddSprintForm = () => {
  return (
    <div className="add__sprint-form">
      <ModalHoc />
      <span className="add__sprint-button__name">Створити спринт</span>
    </div>
  );
};

export default AddSprintForm;
