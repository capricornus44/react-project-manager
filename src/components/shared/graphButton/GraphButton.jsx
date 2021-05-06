import React from 'react';
import '../addButton/AddButton.scss';
import sprite from '../../../assets/icons/sprite.svg';

const GraphButton = () => {
  return (
    <button type="button" aria-label="graph button" className="add-button">
      <svg className="icon-plus">
        <use href={sprite + '#analytics'}></use>
      </svg>
    </button>
  );
};

export default GraphButton;
