import React from 'react';
import './DeleteButton.scss';
import sprite from '../../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../redux/tasks/taskOperations';

const SprintDeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(deleteTask(id))}
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
