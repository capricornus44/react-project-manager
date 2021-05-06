import React from 'react';
// import edit from "../../../assets/icons/edit.svg"
import sprite from "../../../assets/icons/sprite.svg"
import "./TitleProjectForm.scss"


const TitleProjectForm = () => {
    return (
    <>
        <div>
            <h2 className="project__details-title">
                    {/* <img src={edit} className="project__details-edit" alt="edit" width="20px" height="20px" /> */}
                <button className="project__details-edit__button" type="button" aria-label="edit button">
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