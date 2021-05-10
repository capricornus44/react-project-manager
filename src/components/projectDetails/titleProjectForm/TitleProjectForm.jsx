import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import sprite from "../../../assets/icons/sprite.svg"
import { changeTitleProject } from '../../../redux/projects/projectOperations';
import { changeTitleSprint } from '../../../redux/sprints/sprintOperations';
import { getProjectTitle } from '../../../redux/sprints/sprintSelectors';
import "./TitleProjectForm.scss"


const TitleProjectForm = ({projectId}) => {
    const dispatch = useDispatch()

    const [newTitle, setNewTitle] = useState("")
    const [toogleInput, setToogleChange] = useState(true)
    // const projectTitle = useSelector(getProjectTitle)
    const location = useLocation()
    // console.log(location.state.title)
    // console.log(projectId)
    const projectTitle = location.state.title
    
    const changeTitle = () => {
        dispatch(changeTitleProject({ id: projectId, title: "agfhf" }))
toogleInputChange()
        resetName()
    }

    const handleChangeTitle = (e) => {
        setNewTitle ( e.target.value )
    }

    const toogleInputChange = () => {
        setToogleChange(!toogleInput)
    }

    const resetName = () => {
        setNewTitle("")
    }
    // useEffect(() => {
    //         const changeTitle = () => {
    //     dispatch(changeTitleProject({id: projectId, title:"test"}))
    // }
    // }, [projectTitle])

    return (
    <>
        <div>
            <h2 className="project__details-title">
                    {toogleInput ? 
                          projectTitle  :
                        <input className="project__details-title_input" type="text" name="title" value={newTitle} required onChange={handleChangeTitle}></input>
                    }
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