import { Link } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { deleteSprint } from '../../../redux/sprints/sprintOperations';
import SprintDeleteButton from '../../shared/deleteButton/SprintDeleteButton';
import "./SprintsListItem.scss"

const SprintsListItem = ({ startDate, endDate, duration, title, _id:id,projectId }) => {
  // console.log(_id)

      // useEffect(() => {
        
      // }, [])


  const location = useLocation()
  
    return (<>
      <li className="sprint-item">
        <NavLink className="sprint-item__link" to={{pathname: `/projects/${projectId}/${id}`, state: {from : location}}}>
        <h3 className="sprint-item__title">{title}</h3>
          <div className="sprint-item__details">
            <div className="sprint-item__details-column">
              <div className="sprint-item__details-column-details">
                <p className="sprint-item__details-elem-name">Дата початку</p>
              </div>
              <div className="sprint-item__details-column-details-value">
                <p className="sprint-item__details-elem-value">{startDate}</p>
              </div>
            </div>
          <div className="sprint-item__details-column">
            <div className="sprint-item__details-column-details">
              <p className="sprint-item__details-elem-name">Дата закінченя</p>
            </div>
            <div className="sprint-item__details-column-details-value">
              <p className="sprint-item__details-elem-value">{endDate}</p>
            </div>
          </div>
          <div className="sprint-item__details-column">
            <div className="sprint-item__details-column-details">
              <p className="sprint-item__details-elem-name">Тривалість</p>
            </div>
            <div className="sprint-item__details-column-details-value">
              <p className="sprint-item__details-elem-value">{duration}</p>
            </div>
          </div>
      </div>
  <div className="sprint-item__button">
            <SprintDeleteButton id={id} deleteOperation={deleteSprint}/>
          </div>
          </NavLink>
      </li>
      
</>
    );
};

export default SprintsListItem;