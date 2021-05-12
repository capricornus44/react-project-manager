import React, { useContext } from 'react';
import './SprintsPageHeader.scss';
// import sprite from '../../../assets/icons/sprite.svg';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';
import AddTaskForm from '../addTaskForm/AddTaskForm';
import { addTask } from '../../../redux/tasks/taskOperations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouteMatch } from 'react-router';
import DatePagination from '../datePagination/DatePagination';
import { LangContext } from '../../app/App';
import TitleSprintForm from '../titleSprintForm/TitleSprintForm';

const SprintsPageHeader = ({
  counter,
  setCounter,
  duration,
  curDate,
  startSprintDate,
}) => {
  const dispatch = useDispatch();
  const { language } = useContext(LangContext);
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
          <TitleSprintForm sprintId={sprintId} />
          <div className="sprintsPageHeader__addTask_btn_box">
            <ModalHoc
              titleModal={language.sprintPageForm.formTitle}
              cbOnSubmit={submitTask}
              addOperation={addTask}
              data={data}
            >
              <AddTaskForm callback={setData} sprintId={sprintId} />
            </ModalHoc>
            <p className="sprintsPageHeader__addTask_text desktop_item">
              {language.sprintPageHeader.addTaskButton}
            </p>
          </div>
        </div>
        <div className="sprintsPageHeader__categories">
          <ul className="sprintsPageHeader__categories_list">
            <li className="sprintsPageHeader__categories_list_item desktop_item">
              {language.sprintPageHeader.taskName}
            </li>
            <li className="sprintsPageHeader__categories_list_item">
              {language.sprintPageHeader.plannedHours}
            </li>
            <li className="sprintsPageHeader__categories_list_item">
              {language.sprintPageHeader.spentHoursPerDay}
            </li>
            <li className="sprintsPageHeader__categories_list_item">
              {language.sprintPageHeader.spentHoursTotally}
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
