import React, { useEffect, useState } from 'react';
import './Graph.scss';
import sprite from '../../assets/icons/sprite.svg';
import Graph from './Graph';

const GraphModal = ({ showModal, setShowModal }) => {
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

  return (
    <>
      {showModal && (
        <div className="graph-modal__backdrop" onClick={handleBackdropClick}>
          <div className="graph-modal__container">
            <button
              type="button"
              className="graph-modal__btn"
              onClick={closeModal}
            >
              <svg className="graph-modal__icon">
                <use href={sprite + '#close'} />
              </svg>
            </button>
            <Graph />
          </div>
        </div>
      )}
    </>
  );
};

export default GraphModal;
