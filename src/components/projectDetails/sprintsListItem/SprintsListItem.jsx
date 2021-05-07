import React from 'react';
import SprintDeleteButton from '../../shared/deleteButton/SprintDeleteButton';
import "./SprintsListItem.scss"

const SprintsListItem = ({ startDate, endDate, duration, title }) => {
  console.log(startDate)
    return (<>
      <li className="sprint-item">
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
      <SprintDeleteButton />
   </div>
      </li>
      
</>
    );
};

export default SprintsListItem;