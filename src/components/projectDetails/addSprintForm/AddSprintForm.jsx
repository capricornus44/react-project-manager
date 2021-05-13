import React, { useState, useContext } from 'react';

import { useRouteMatch } from 'react-router';
import { addSprint } from '../../../redux/sprints/sprintOperations';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddSprintData from './AddSprintData/AddSprintData';
import './AddSprintForm.scss';
import { LangContext } from '../../app/App';

const AddSprintForm = () => {
  const { language } = useContext(LangContext);
  const [data, setData] = useState('');

  const match = useRouteMatch();
  const projectId = match.params.projectId;

  return (
    <>
      <ModalHoc
        titleModal={language.projectPageForm.formTitle}
        addOperation={addSprint}
        data={data}
      >
        <AddSprintData cb={setData} projectId={projectId} />
      </ModalHoc>
    </>
  );
};

export default AddSprintForm;
