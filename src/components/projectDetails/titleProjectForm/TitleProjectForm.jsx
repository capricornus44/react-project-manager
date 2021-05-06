import React from 'react';
import sprite from "../../../assets/icons/sprite.svg"
import "./TitleProjectForm.scss"


const TitleProjectForm = () => {
    return (
    <>
        <div>
            <h2 className="project__details-title">
                   
                <button className="project__details-edit__button project__details-edit " type="button" aria-label="edit button">
                    <svg className="project__details-edit__icon"> 
                        <use href={sprite + '#edit'}/> 
                    </svg>
                </button>
                    
                    Project 1
             </h2>

        </div>
    </>
    );
};

export default TitleProjectForm;