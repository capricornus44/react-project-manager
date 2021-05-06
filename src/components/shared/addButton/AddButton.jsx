import React, { useState } from 'react';
import './AddButton.scss';
import sprite from '../../../assets/icons/sprite.svg';
import SidebarModal from '../sidebarModal/SidebarModal';

const AddButton = () => {

  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(true)
  }
  
  return (<>
    <button type="button" aria-label="add button" className="add-button" onClick={toogleModal}>
      <svg className="icon-plus">
        <use href={sprite + '#plus'}></use>
      </svg>
    </button>
      <SidebarModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AddButton;
