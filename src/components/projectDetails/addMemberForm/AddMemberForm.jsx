import React from 'react';
import { Link } from 'react-router-dom';
import sprite from "../../../assets/icons/sprite.svg"
import "./AddMemberForm.scss"

const AddMemberForm = () => {

    return (
        <div className="project__details-add__ember-form">
            <Link className="project__details-add__ember-link" to="/">
                <span className="project__details-add__ember">      
                        <svg  className="project__details-add__ember-icon"> 
                            <use href={sprite + '#add-members'}/> 
                        </svg>
                    Додати людей
                </span>
            </Link>
        </div>
    );
};

export default AddMemberForm;