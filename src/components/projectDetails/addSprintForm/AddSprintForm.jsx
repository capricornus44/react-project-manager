import React from 'react';
import AddButton from '../../shared/addButton/AddButton';
import "./AddSprintForm.scss"

const AddSprintForm = () => {
    return (
        <div className="add__sprint-form">
            <AddButton />
            <span className="add__sprint-button__name">Створити спринт</span>
        </div>
    );
};

export default AddSprintForm;   