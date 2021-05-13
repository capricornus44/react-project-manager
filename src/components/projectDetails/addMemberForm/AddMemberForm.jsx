import React, { useContext, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';
import './AddMemberForm.scss';
import { LangContext } from '../../app/App';
import SidebarModal from '../../shared/sidebarModal/SidebarModal';
import AddMemberData from './AddMemberData/AddMemberData';
import { addMemberProject } from '../../../redux/projects/projectOperations';

const AddMemberForm = () => {
  const { language } = useContext(LangContext);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState('');
  const projectId = useRouteMatch().params.projectId;
  const toogleModal = () => {
    setShowModal(true);
  };

  return (
    <div className="project__details-add__ember-form">
      <button
        className="project__details-add__ember-button"
        onClick={toogleModal}
      >
        <span className="project__details-add__ember">
          <svg className="project__details-add__ember-icon">
            <use href={sprite + '#add-members'} />
          </svg>
          {language.projectPage.addMembersButton}
        </span>
      </button>
      <SidebarModal
        data={data}
        titleModal={language.addMembersForm.formTitle}
        showModal={showModal}
        setShowModal={setShowModal}
        addOperation={addMemberProject}
      >
        <AddMemberData cb={setData} id={projectId} />
      </SidebarModal>
    </div>
  );
};

export default AddMemberForm;
