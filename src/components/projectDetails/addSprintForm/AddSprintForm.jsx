import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSprint } from '../../../redux/sprints/sprintOperations';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddSprintData from './AddSprintData/AddSprintData';
import './AddSprintForm.scss';

const AddSprintForm = ({ projectId }) => {

  const [data, setData] = useState("")
  const dispatch = useDispatch()

  const submitSprint = ( data) => {
    // console.log(projectId)
    dispatch(addSprint(data))
  }


  return (
    <div className="add__sprint-form">
      <ModalHoc title="Створити спринт" titleModal="Створення спринта" addOperation={addSprint} data={data}>
        <AddSprintData cb={setData} projectId={projectId}/>
      </ModalHoc>
      {/* <span className="add__sprint-button__name">Створити спринт</span> */}
    </div>
  );
};

export default AddSprintForm;
