import React, { useState } from 'react';
import './ModalHoc.scss';
import sprite from '../../../assets/icons/sprite.svg';
import SidebarModal from '../sidebarModal/SidebarModal';

const ModalHoc = ({ children, title, addOperation, titleModal, data }) => {
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        type="button"
        aria-label="add button"
        className="add-button"
        onClick={toogleModal}
      >
        <svg className="icon-plus">
          <use href={sprite + '#plus'}></use>
        </svg>
      </button>

      <SidebarModal
        data={data}
        titleModal={titleModal}
        showModal={showModal}
        setShowModal={setShowModal}
        addOperation={addOperation}
      >
        {children}
      </SidebarModal>
    </>
  );
};

export default ModalHoc;
