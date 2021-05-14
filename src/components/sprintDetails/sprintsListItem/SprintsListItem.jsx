import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskHours } from '../../../redux/tasks/taskOperations';
import TaskDeleteButton from '../../shared/deleteButton/TaskDeleteButton';
import './SprintsListItem.scss';
import { LangContext } from '../../app/App';

const getSingleHours = (hoursWastedPerDay, curDate) => {
  const hoursWasted = hoursWastedPerDay?.find(({ currentDay }) => {
    return currentDay === curDate;
  });
  return hoursWasted ? hoursWasted.singleHoursWasted : 0;
};

const options = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const SprintsListItem = ({
  curDate,
  _id: id,
  title,
  hoursPlanned,
  hoursWasted,
  hoursWastedPerDay,
}) => {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(() =>
    getSingleHours(hoursWastedPerDay, curDate),
  );
  const [isInput, setIsInput] = useState(false);

  const onHandleChange = async e => {
    try {
      await dispatch(
        changeTaskHours({ id, curDate, inputValue: e.target.value }),
      );
      setInputValue(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleHours(hoursWastedPerDay, curDate);
  }, [curDate, hoursWastedPerDay]);

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

            {!isInput ? (
              <p
                className="sprintsListItem__list_input"
                onClick={() => setIsInput(true)}
              >
                {getSingleHours(hoursWastedPerDay, curDate)}
              </p>
            ) : (
              <select
                name="singleHoursWasted"
                className="sprintsListItem__list_input"
                value={getSingleHours(hoursWastedPerDay, curDate)}
                onChange={onHandleChange}
              >
                {options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
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
