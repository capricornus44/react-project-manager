import React from 'react';
import './DeleteButton.scss';
import sprite from '../../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';

const SprintDeleteButton = ({ id, deleteOperation }) => {
  const dispatch = useDispatch();

  const onDeleteBtn = e => {
    e.preventDefault();
    if (e.currentTarget.type === 'button') {
      dispatch(deleteOperation(id));
    }
  };

  return (
    <button
      onClick={onDeleteBtn}
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
