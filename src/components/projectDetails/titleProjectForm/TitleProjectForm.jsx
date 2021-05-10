import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from "../../../assets/icons/sprite.svg"
import { changeTitleSprint } from '../../../redux/sprints/sprintOperations';
import { getProjectTitle } from '../../../redux/sprints/sprintSelectors';
import "./TitleProjectForm.scss"


const TitleProjectForm = () => {
    const dispatch = useDispatch()
    const prohectTitle = useSelector(getProjectTitle)

    const changeTitle = () => {
        dispatch(changeTitleSprint())
    }

    return (
    <>
        <div>
            <h2 className="project__details-title">
                   
                    <button className="project__details-edit__button project__details-edit " type="button" aria-label="edit button"
                    onClick={changeTitle}
                    >
                    <svg className="project__details-edit__icon"> 
                        <use href={sprite + '#edit'}/> 
                    </svg>
                </button>
                    
                    
             </h2>

        </div>
    </>
    );
};

export default TitleProjectForm;