import './SprintsPageHeader.scss';
import sprite from '../../../assets/icons/sprite.svg';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddTaskForm from '../addTaskForm/AddTaskForm';
import { addTask } from '../../../redux/tasks/taskOperations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouteMatch } from 'react-router';
import DatePagination from '../datePagination/DatePagination';

const SprintsPageHeader = ({
  counter,
  setCounter,
  duration,
  curDate,
  curSprint,
  startSprintDate,
}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const sprintId = useRouteMatch().params.sprintId;

  const submitTask = data => {
    dispatch(addTask({ sprintId, data }));
  };

  // const onFilterChange = e => {
  //   const { name, value } = e.target;
  // };

  return (
    <div className="sprintsPageHeader__MainContainer">
      <div className="sprintsPageHeader__container">
        <div className="sprintsPageHeader__datesInput_box">
          <DatePagination
            counter={counter}
            setCounter={setCounter}
            duration={duration}
            curDate={curDate}
            startSprintDate={startSprintDate}
          />

          <form className="sprintsPageHeader__searchForm">
            <button
              type="submit"
              className="sprintsPageHeader__searchBtn"
            ></button>
            <input
              className="sprintsPageHeader__input"
              type="text"
              name="tasksFilter"
              // onChange={onFilterChange}
            />
          </form>
        </div>
        <div className="sprintsPageHeader__heading_box">
          <h1 className="sprintsPageHeader__heading">{curSprint?.title}</h1>
          <button className="sprintsPageHeader_editHeaderBtn">
            <svg width="20" height="20">
              <use href={sprite + '#edit'}></use>
            </svg>
          </button>
          <div className="sprintsPageHeader__addTask_btn_box">
            <ModalHoc
              titleModal="Створення задачі"
              cbOnSubmit={submitTask}
              addOperation={addTask}
              data={data}
            >
              <AddTaskForm callback={setData} sprintId={sprintId} />
            </ModalHoc>
            <p className="sprintsPageHeader__addTask_text desktop_item">
              Створити задачу
            </p>
          </div>
        </div>
        <div className="sprintsPageHeader__categories">
          <ul className="sprintsPageHeader__categories_list">
            <li className="sprintsPageHeader__categories_list_item desktop_item">
              Задача
            </li>
            <li className="sprintsPageHeader__categories_list_item">
              Заплановано годин
            </li>
            <li className="sprintsPageHeader__categories_list_item">
              Витрачено год / день
            </li>
            <li className="sprintsPageHeader__categories_list_item">
              Витрачено годин
            </li>
            <li className="  desktop_item">
              {/* <button
                className="sprintsPageHeader__searchBtn"
                type="button"
              ></button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SprintsPageHeader;
