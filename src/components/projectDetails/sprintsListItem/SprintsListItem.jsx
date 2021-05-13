import { Link } from '@material-ui/core';
import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { deleteSprint } from '../../../redux/sprints/sprintOperations';
import SprintDeleteButton from '../../shared/deleteButton/SprintDeleteButton';
import './SprintsListItem.scss';
import { LangContext } from '../../app/App';
import moment from 'moment';

import uk from 'moment/locale/uk';

const SprintsListItem = ({
  startDate,
  endDate,
  duration,
  title,
  _id: id,
  projectId,
}) => {
  const { language } = useContext(LangContext);
  const location = useLocation();

  return (
    <>
      <li className="sprint-item">
        <NavLink
          className="sprint-item__link"
          to={{
            pathname: `/projects/${projectId}/sprints/${id}`,
            state: { from: location },
          }}
        >
          <h3 className="sprint-item__title">{title}</h3>
          <div className="sprint-item__details">
            <div className="sprint-item__details-column">
              <div className="sprint-item__details-column-details">
                <p className="sprint-item__details-elem-name">
                  {language.projectPageForm.startDate}
                </p>
              </div>
              <div className="sprint-item__details-column-details-value">
                <p className="sprint-item__details-elem-value">
                  {moment(startDate).format('D MMM')}
                </p>
              </div>
            </div>
            <div className="sprint-item__details-column">
              <div className="sprint-item__details-column-details">
                <p className="sprint-item__details-elem-name">
                  {language.projectPageForm.expireDate}
                </p>
              </div>
              <div className="sprint-item__details-column-details-value">
                <p className="sprint-item__details-elem-value">
                  {moment(endDate).format('D MMM')}
                </p>
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
            <SprintDeleteButton id={id} deleteOperation={deleteSprint} />
          </div>
        </NavLink>
      </li>
    </>
  );
};

export default SprintsListItem;
