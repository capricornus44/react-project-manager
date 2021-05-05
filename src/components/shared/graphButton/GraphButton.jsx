import React from 'react';
import '../addButton/AddButton.scss';
import sprite from '../../../assets/icons/sprite.svg';

const AddButton = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="graph button"
      className="add-button"
      onClick={onClick}
    >
      <svg className="icon-plus">
        <use href={sprite + '#analytics'}></use>
      </svg>
    </button>
  );
};

export default AddButton;
