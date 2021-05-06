import React from 'react';
import SprintDeleteButton from '../../shared/deleteButton/SprintDeleteButton';
import "./SprintsListItem.scss"

const SprintsListItem = () => {
    return (<>
        <li className="sprint-item">
        <h3 className="sprint-item__title">Sprint Burndown Chart 1</h3>
        <div className="sprint-item__details">
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">Дата початку</p>
              <p className="sprint-item__details-elem">Дата закінченя</p>
              <p className="sprint-item__details-elem">Тривалість</p>
          </div>
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">10 Лип</p>
              <p className="sprint-item__details-elem">22 Лип</p>
              <p className="sprint-item__details-elem">226</p>
            </div>
        </div>
        <div className="sprint-item__button">
          <SprintDeleteButton />
        </div>
      </li>
      <li className="sprint-item">
        <h3 className="sprint-item__title">Sprint Burndown Chart 1</h3>
        <div className="sprint-item__details">
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">Дата початку</p>
              <p className="sprint-item__details-elem">Дата закінченя</p>
              <p className="sprint-item__details-elem">Тривалість</p>
          </div>
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">10 Лип</p>
              <p className="sprint-item__details-elem">22 Лип</p>
              <p className="sprint-item__details-elem">226</p>
            </div>
        </div>
        <div className="sprint-item__button">
          <SprintDeleteButton />
        </div>
      </li><li className="sprint-item">
        <h3 className="sprint-item__title">Sprint Burndown Chart 1</h3>
        <div className="sprint-item__details">
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">Дата початку</p>
              <p className="sprint-item__details-elem">Дата закінченя</p>
              <p className="sprint-item__details-elem">Тривалість</p>
          </div>
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">10 Лип</p>
              <p className="sprint-item__details-elem">22 Лип</p>
              <p className="sprint-item__details-elem">226</p>
            </div>
        </div>
        <div className="sprint-item__button">
          <SprintDeleteButton />
        </div>
      </li><li className="sprint-item">
        <h3 className="sprint-item__title">Sprint Burndown Chart 1</h3>
        <div className="sprint-item__details">
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">Дата початку</p>
              <p className="sprint-item__details-elem">Дата закінченя</p>
              <p className="sprint-item__details-elem">Тривалість</p>
          </div>
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">10 Лип</p>
              <p className="sprint-item__details-elem">22 Лип</p>
              <p className="sprint-item__details-elem">226</p>
            </div>
        </div>
        <div className="sprint-item__button">
          <SprintDeleteButton />
        </div>
      </li><li className="sprint-item">
        <h3 className="sprint-item__title">Sprint Burndown Chart 1</h3>
        <div className="sprint-item__details">
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">Дата початку</p>
              <p className="sprint-item__details-elem">Дата закінченя</p>
              <p className="sprint-item__details-elem">Тривалість</p>
          </div>
          <div className="sprint-item__details-column">
              <p className="sprint-item__details-elem">10 Лип</p>
              <p className="sprint-item__details-elem">22 Лип</p>
              <p className="sprint-item__details-elem">226</p>
            </div>
        </div>
        <div className="sprint-item__button">
          <SprintDeleteButton />
        </div>
      </li>


</>
    );
};

export default SprintsListItem;