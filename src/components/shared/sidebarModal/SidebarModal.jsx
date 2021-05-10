import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './SidebarModal.scss';
import sprite from '../../../assets/icons/sprite.svg';
import FormButton from '../formButton/FormButton';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal_root');

const SidebarModal = ({
  children,
  onClose,
  showModal,
  setShowModal,
  addOperation,
  titleModal,
  data,
}) => {
  const modalRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setShowModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSave = e => {
    e.preventDefault();
    closeModal();
    // dispatch(addOperation(data));
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
          <h2>{titleModal}</h2>
          <form onSubmit={onSave}>
            {children}
            <div className="sidebar-modal__btm">
              <FormButton>Готово</FormButton>
              <button
                type="button"
                onClick={closeModal}
                className="sidebar-modal__link"
              >
                Відміна
              </button>
            </div>
          </form>
        </div>
      </div>
    ),
    modalRoot,
  );
};

export default SidebarModal;
