import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProjectsOperation } from '../../../redux/projects/projectOperations';
import { LangContext } from '../../app/App';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddProjectForm from '../addProjectForm/AddProjectForm';

const AddProjectBtn = () => {
  const { language } = useContext(LangContext);

  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const submitProject = data => {
    dispatch(addProjectsOperation(data));
  };

  return (
    <>
      <ModalHoc
        data={data}
        cbOnSubmit={submitProject}
        titleModal={language.projectsPageForm.formTitle}
        addOperation={addProjectsOperation}
      >
        <AddProjectForm cb={setData} />
      </ModalHoc>
    </>
  );
};

export default AddProjectBtn;
