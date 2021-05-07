import './SprintsPageHeader.scss';
import sprite from '../../../assets/icons/sprite.svg';
import ModalHoc from '../../shared/ModalHoc/ModalHoc';

const SprintsPageHeader = () => {
  return (
    <div className="sprintsPageHeader__MainContainer">
      <div className="sprintsPageHeader__container">
        <div className="sprintsPageHeader__datesInput_box">
          <div className="sprintsPageHeader__dates">
            <button className="sprintsPageHeader__dates_btn">&#9668;</button>
            <p>
              <span className="sprintsPageHeader__dates_curDay">day</span>/
              <span className="sprintsPageHeader__dates_days">days</span>
            </p>
            <button className="sprintsPageHeader__dates_btn">&#9658;</button>
            <p className="sprintsPageHeader__date">date</p>
          </div>

          <form className="sprintsPageHeader__searchForm">
            <button
              type="submit"
              className="sprintsPageHeader__searchBtn"
            ></button>
            <input className="sprintsPageHeader__input" type="text" />
          </form>
        </div>
        <div className="sprintsPageHeader__heading_box">
          <h1 className="sprintsPageHeader__heading">Sprint Burndown Chart</h1>
          <button className="sprintsPageHeader_editHeaderBtn">
            <svg width="20" height="20">
              <use href={sprite + '#edit'}></use>
            </svg>
          </button>
          <div className="sprintsPageHeader__addTask_btn_box">
            <ModalHoc />
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
              <button
                className="sprintsPageHeader__searchBtn"
                type="button"
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SprintsPageHeader;
