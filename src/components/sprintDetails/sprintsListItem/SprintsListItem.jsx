import SprintDeleteButton from '../../shared/deleteButton/SprintDeleteButton';
import './SprintsListItem.scss';

const SprintsListItem = ({ title, hoursPlanned, hoursWasted }) => {
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
              className="sprintsListItem__list_input"
              placeholder="0"
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
          <SprintDeleteButton />
        </div>
      </li>
    </>
  );
};

export default SprintsListItem;
