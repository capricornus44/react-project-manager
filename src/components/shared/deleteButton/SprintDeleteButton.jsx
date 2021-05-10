import React from 'react';
import './DeleteButton.scss';
import sprite from '../../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteSprint } from '../../../redux/sprints/sprintOperations';

const SprintDeleteButton = ( {id} ) => {

  const dispatch = useDispatch()

//   const deleteBtn = (id) => {
//   dispatch(deleteSprint(id))
// }

  return (
    <button onClick={()=>dispatch(deleteSprint(id))}
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
