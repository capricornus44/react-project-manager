import React, { useState, useContext } from 'react';
import './ProjectsHeader.scss';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddProjectForm from '../addProjectForm/AddProjectForm';
import { addProjectsOperation } from '../../../redux/projects/projectOperations';
import { useDispatch } from 'react-redux';
import { LangContext } from '../../app/App';

const ProjectsHeader = () => {
  const { language } = useContext(LangContext);
  // const [title, setTitle] = useState('');
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const submitProject = data => {
    dispatch(addProjectsOperation(data));
  };

  return (
    <div className="projects_header">
      <h2 className="projects_title">{language.projectsPage.pageTitle}</h2>
      <div className="projects_add">
        <ModalHoc
          data={data}
          cbOnSubmit={submitProject}
          // title="Створити проект"
          title={language.projectsPage.addButton}
          titleModal={language.projectsPageForm.formTitle}
          addOperation={addProjectsOperation}
        >
          <AddProjectForm cb={setData} />
        </ModalHoc>
      </div>
    </div>
  );
};

export default ProjectsHeader;
