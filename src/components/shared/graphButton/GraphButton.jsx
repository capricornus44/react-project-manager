import React from 'react';
import '../ModalHoc/ModalHoc.scss';
import sprite from '../../../assets/icons/sprite.svg';

const GraphButton = ({ openModal }) => {
  return (
    <button
      type="button"
      aria-label="graph button"
      className="add-button"
      onClick={openModal}
    >
      <svg className="icon-plus">
        <use href={sprite + '#analytics'}></use>
      </svg>
    </button>
  );
};

export default GraphButton;
