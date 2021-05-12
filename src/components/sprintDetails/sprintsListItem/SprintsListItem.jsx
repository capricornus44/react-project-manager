import React, { useContext } from 'react';
import TaskDeleteButton from '../../shared/deleteButton/TaskDeleteButton';
import './SprintsListItem.scss';
import { LangContext } from '../../app/App';

const SprintsListItem = ({ _id: id, title, hoursPlanned, hoursWasted }) => {
  const { language } = useContext(LangContext);
  return (
    <>
      <li className="sprintsListItem">
        <h2 className="sprintsListItem__heading">{title}</h2>
        <ul className="sprintsListItem__list">
          <li className="sprintsListItem__list_item">
            <p className="sprintsListItem__list_item_text">
              {language.sprintPageHeader.plannedHours}
            </p>
            <span className="sprintsListItem__list_item_digit">
              {hoursPlanned}
            </span>
          </li>
          <li className="sprintsListItem__list_item">
            <p className="sprintsListItem__list_item_text">
              {language.sprintPageHeader.spentHoursPerDay}
            </p>
            <input
              className="sprintsListItem__list_input"
              placeholder="0"
            ></input>
          </li>
          <li className="sprintsListItem__list_item">
            <p className="sprintsListItem__list_item_text">
              {language.sprintPageHeader.spentHoursTotally}
            </p>
            <span className="sprintsListItem__list_item_digit">
              {hoursWasted}
            </span>
          </li>
        </ul>
        <div className="sprintsListItem__deleteBtn_box">
          <TaskDeleteButton id={id} />
        </div>
      </li>
    </>
  );
};

export default SprintsListItem;
