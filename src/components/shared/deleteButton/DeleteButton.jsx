import React from 'react';
import './DeleteButton.scss';
import sprite from '../../../assets/icons/sprite.svg';

const DeleteButton = () => {
  return (
    <button type="button" aria-label="delete button" className="delete-button">
      <svg className="icon-delete">
        <use href={sprite + '#delete'}></use>
      </svg>
    </button>
  );
};

export default DeleteButton;
