import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import './SidebarModal.scss';
import sprite from '../../../assets/icons/sprite.svg';
import FormButton from '../formButton/FormButton';

const modalRoot = document.querySelector('#modal_root');

const SidebarModal = ({ children, onClose, setShowModal, title }) => {
  const modalRef = useRef();

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  const handleEsc = e => {
    if (e.code === 'Escape') {
      setShowModal(false);
    }
  };
  const onHandleClick = () => {
    setShowModal(false);
  };

  const handleBackdropClick = e => {
    if (e.target.dataset) {
      if (e.target.nodeName === 'DIV' && e.target.dataset.zone === 'overlay') {
        setShowModal(false);
      }
    }
  };

  //   const closeModal = e => {
  //     if (e.target === modalRef.current) {
  //       setShowModal(false);
  //     }
  //   };
  return createPortal(
    showModal && (
      <div
        data-zone="overlay"
        className="sidebar-modal"
        ref={modalRef}
        onClick={handleBackdropClick}
      >
        <div className="sidebar-modal__container">
          <button
            type="button"
            className="sidebar-modal__btn"
            onClick={onHandleClick}
          >
            <svg className="sidebar-modal__icon">
              <use href={sprite + '#close'} />
            </svg>
          </button>
          <h2>{title}</h2>
          {children}
          <FormButton onClose={onClose} />
        </div>
      </div>
    ),
    modalRoot,
  );
};

export default SidebarModal;
