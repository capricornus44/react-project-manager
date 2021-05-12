import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { addSprint } from '../../../redux/sprints/sprintOperations';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddSprintData from './AddSprintData/AddSprintData';
import './AddSprintForm.scss';
import { LangContext } from '../../app/App';

const AddSprintForm = () => {
  const { language } = useContext(LangContext);
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  // const submitSprint = ( data) => {
  //   // console.log(projectId)
  //   dispatch(addSprint(data))
  // }

  const match = useRouteMatch();
  const projectId = match.params.projectId;

  return (
    <>
      {/* <div className="add__sprint-form"> */}
      <ModalHoc
        // title="Створити спринт"
        titleModal={language.projectPageForm.formTitle}
        addOperation={addSprint}
        data={data}
      >
        <AddSprintData cb={setData} projectId={projectId} />
      </ModalHoc>
      {/* <span className="add__sprint-button__name">Створити спринт</span> */}
      {/* </div> */}
    </>
  );
};

export default AddSprintForm;
