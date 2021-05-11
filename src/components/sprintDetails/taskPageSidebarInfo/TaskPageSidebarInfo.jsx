// import { useSelector } from 'react-redux';
// import { getAllSprints } from '../../../redux/sprints/sprintSelectors';

import AddSprintForm from '../../projectDetails/addSprintForm/AddSprintForm';
import './TaskPageSidebarInfo.scss';
import sprite from '../../../assets/icons/sprite.svg';
const TaskPageSidebarInfo = () => {
  //   const sprints = useSelector(getAllSprints);

  return (
    <div className="sidebar__box">
      <button type="button" className="sidebar__Btn">
        <svg className="sidebar__Btn_arrow">
          <use href={sprite + '#back-arrow'}></use>
        </svg>
        <span className="sidebar__Btn_text sidebar__text">
          Показати спринти
        </span>
      </button>
      <ul className="sidebar__list">
        <li className="sidebar__list_item">
          <span className="sidebar__list_square"></span>
          <p className="sidebar__list_item_name sidebar__text">
            Sprint looooooong name 1
          </p>
        </li>
        <li className="sidebar__list_item">
          <span className="sidebar__list_square"></span>
          <p className="sidebar__list_item_name sidebar__text">
            Sprint looooooong name 2
          </p>
        </li>
        <li className="sidebar__list_item">
          <span className="sidebar__list_square"></span>
          <p className="sidebar__list_item_name sidebar__text">
            Sprint looooooong name 3
          </p>
        </li>
      </ul>
      <div className="sidebar__addSprintForm_box">
        <div className="sidebar__addSprintFormBtn_box">
          <AddSprintForm />
        </div>

        <p className="sidebar__addSprintForm_title sidebar__text">
          Створити спринт
        </p>
      </div>
    </div>
  );
};

export default TaskPageSidebarInfo;
