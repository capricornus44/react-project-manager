import React, { useContext } from 'react';
import './ProjectsHeader.scss';
// import ModalHoc from '../../shared/ModalHoc/ModalHoc';
// import AddProjectForm from '../addProjectForm/AddProjectForm';
// import { addProjectsOperation } from '../../../redux/projects/projectOperations';
// import { useDispatch } from 'react-redux';
import { LangContext } from '../../app/App';
import AddProjectBtn from '../addProjectBtn/AddProjectBtn';

const ProjectsHeader = () => {
  const { language } = useContext(LangContext);
  // const [title, setTitle] = useState('');

  // const [data, setData] = useState({});

  // const dispatch = useDispatch();

  // const submitProject = data => {
  //   dispatch(addProjectsOperation(data));
  // };

  return (
    <div className="projects_header">
      <h2 className="projects_title">{language.projectsPage.pageTitle}</h2>
      <div className="projects_add">
        <AddProjectBtn />
        <p className="projects_add_text">{language.projectsPage.addButton}</p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
