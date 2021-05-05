import React from 'react';
import './AddButton.scss';
import sprite from '../../../assets/icons/sprite.svg';

const AddButton = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="add button"
      className="add-button"
      onClick={onClick}
    >
      <svg className="icon-plus">
        <use href={sprite + '#plus'}></use>
      </svg>
    </button>
  );
};

export default AddButton;
