import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProjectsOperation } from '../../../redux/projects/projectOperations';
import './DeleteButton.scss';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const deleteProj = e => {
    e.preventDefault();
    if (e.currentTarget.type === 'button') {
      dispatch(deleteProjectsOperation(id));
    }
  };

  return (
    <button
      type="button"
      aria-label="delete button"
      className="delete-button"
      onClick={deleteProj}
    />
  );
};

export default DeleteButton;
