import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addSprint } from '../../../redux/sprints/sprintOperations';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddSprintData from './AddSprintData/AddSprintData';
import './AddSprintForm.scss';
import { LangContext } from '../../app/App';

const AddSprintForm = () => {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  const submitSprint = data => {
    dispatch(addSprint(data));
  };
  return (
    <div className="add__sprint-form">
      <ModalHoc
        title={language.projectPage.addSprintButton}
        titleModal={language.projectPageForm.formTitle}
      >
        <AddSprintData cb={submitSprint} />
      </ModalHoc>
      {/* <span className="add__sprint-button__name">Створити спринт</span> */}
    </div>
  );
};

export default AddSprintForm;
