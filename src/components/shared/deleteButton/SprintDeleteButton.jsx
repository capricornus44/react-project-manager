import React from 'react';
import './DeleteButton.scss';
import sprite from '../../../assets/icons/sprite.svg';

const SprintDeleteButton = () => {
  return (
    <button
      type="button"
      aria-label="delete button"
      className="sprint__delete-button"
    >
      <svg className="sprint__icon-delete">
        <use href={sprite + '#delete'}></use>
      </svg>
    </button>
  );
};

export default SprintDeleteButton;
