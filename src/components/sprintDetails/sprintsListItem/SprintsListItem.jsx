import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskHours } from '../../../redux/tasks/taskOperations';
import TaskDeleteButton from '../../shared/deleteButton/TaskDeleteButton';
import './SprintsListItem.scss';

const SprintsListItem = ({
  curDate,
  _id: id,
  title,
  hoursPlanned,
  hoursWasted,
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  const onHandleChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log(id, curDate, inputValue);
    dispatch(changeTaskHours({ id, curDate, inputValue }));
  }, [dispatch, id, curDate, inputValue]);

  return (
    <>
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
            <input
              type="number"
              name="singleHoursWasted"
              className="sprintsListItem__list_input"
              placeholder="0"
              value={inputValue}
              onChange={onHandleChange}
            ></input>
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
