import React, { useEffect, useContext } from 'react';
import SprintDeleteButton from '../../shared/deleteButton/SprintDeleteButton';
import './SprintsListItem.scss';
import { LangContext } from '../../app/App';

const SprintsListItem = ({ startDate, endDate, duration, title, _id }) => {
  const { language } = useContext(LangContext);
  // console.log(_id)

  // useEffect(() => {

  // }, [])

  return (
    <>
      <li className="sprint-item">
        <h3 className="sprint-item__title">{title}</h3>
        <div className="sprint-item__details">
          <div className="sprint-item__details-column">
            <div className="sprint-item__details-column-details">
              <p className="sprint-item__details-elem-name">
                {language.projectPageForm.startDate}
              </p>
            </div>
            <div className="sprint-item__details-column-details-value">
              <p className="sprint-item__details-elem-value">{startDate}</p>
            </div>
          </div>
          <div className="sprint-item__details-column">
            <div className="sprint-item__details-column-details">
              <p className="sprint-item__details-elem-name">
                {language.projectPageForm.expireDate}
              </p>
            </div>
            <div className="sprint-item__details-column-details-value">
              <p className="sprint-item__details-elem-value">{endDate}</p>
            </div>
          </div>
          <div className="sprint-item__details-column">
            <div className="sprint-item__details-column-details">
              <p className="sprint-item__details-elem-name">
                {language.projectPageForm.duration}
              </p>
            </div>
            <div className="sprint-item__details-column-details-value">
              <p className="sprint-item__details-elem-value">{duration}</p>
            </div>
          </div>
        </div>
        <div className="sprint-item__button">
          <SprintDeleteButton id={_id} />
        </div>
      </li>
    </>
  );
};

export default SprintsListItem;
