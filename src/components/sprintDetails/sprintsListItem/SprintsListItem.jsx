import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskHours } from '../../../redux/tasks/taskOperations';
import TaskDeleteButton from '../../shared/deleteButton/TaskDeleteButton';
import './SprintsListItem.scss';

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
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(() =>
    getSingleHours(hoursWastedPerDay, curDate),
  );
  const [isInput, setIsInput] = useState(false);

  // const singleWastedHour = getSingleHours(hoursWastedPerDay, curDate);

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

  // const onHandleSubmit = e => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   setIsInput(false);
  // }, [singleWastedHour]);

  useEffect(() => {
    getSingleHours(hoursWastedPerDay, curDate);
  }, [curDate]);

  return (
    <>
      {/* {console.log(singleWastedHour)} */}
      <li className="sprintsListItem">
        <h2 className="sprintsListItem__heading">{title}</h2>
        <ul className="sprintsListItem__list">
          <li className="sprintsListItem__list_item">
            <p className="sprintsListItem__list_item_text">Заплановано годин</p>
            <span className="sprintsListItem__list_item_digit">
              {hoursPlanned}
            </span>
          </li>
          <li className="sprintsListItem__list_item">
            <p className="sprintsListItem__list_item_text">
              Витрачено год / день
            </p>

            {!isInput ? (
              <p
                className="sprintsListItem__list_input"
                onClick={() => setIsInput(true)}
              >
                {getSingleHours(hoursWastedPerDay, curDate)}
              </p>
            ) : (
              // <form onSubmit={onHandleSubmit}>
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
              // </form>
            )}
          </li>
          <li className="sprintsListItem__list_item">
            <p className="sprintsListItem__list_item_text">Витрачено годин</p>
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
