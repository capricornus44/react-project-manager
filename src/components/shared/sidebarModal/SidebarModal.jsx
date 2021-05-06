import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import './SidebarModal.scss';
import sprite from '../../../assets/icons/sprite.svg';
import FormButton from '../formButton/FormButton';

const modalRoot = document.querySelector('#modal_root');

const SidebarModal = ({ children, onClose, title,showModal,setShowModal }) => {
  const modalRef = useRef();
//   const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleEsc = e => {
    if (e.code === 'Escape') {
      setShowModal(false);
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return createPortal(
    showModal && (
      <div
        className="sidebar-modal"
        ref={modalRef}
        onClick={handleBackdropClick}
      >
        <div className="sidebar-modal__container">
          <button
            type="button"
            className="sidebar-modal__btn"
            onClick={closeModal}
          >
            <svg className="sidebar-modal__icon">
              <use href={sprite + '#close'} />
            </svg>
          </button>
          <h2>{title}</h2>
          {children}
          <div className="sidebar-modal__btm">
            <FormButton onClose={onClose} />

            <Link to="/" className="sidebar-modal__link">
              Відміна
            </Link>
          </div>
        </div>
      </div>
    ),
    modalRoot,
  );
};

export default SidebarModal;
