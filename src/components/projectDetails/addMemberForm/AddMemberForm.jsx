import React from 'react';
import { Link } from 'react-router-dom';
import addMember from "../../../assets/icons/add-members.svg"
import "./AddMemberForm.scss"

const AddMemberForm = () => {

    return (
        <div className="project__details-add__ember-form">
            <Link className="project__details-add__ember-link">
                <span className="project__details-add__ember">      
                    <img className="project__details-add__ember-img" src={addMember} alt="add Member" width="20px" height="20px"/>
                    Додати людей
                    </span>
            </Link>
        </div>
    );
};

export default AddMemberForm;