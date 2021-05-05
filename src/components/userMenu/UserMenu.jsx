import React from 'react';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/icons/sprite.svg';
import './UserMenu.scss';

const UserMenu = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  return (
    <div className="user">
      <span className="user__greeting">Username</span>

      {isMobile ? (
        <button
          type="button"
          className="user__logout-button-mobile"
          aria-label="logout button"
        >
          <svg className="user__logout-icon-mobile">
            <use href={sprite + '#logout'}></use>
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="user__logout-button"
          aria-label="logout button"
        >
          <svg className="user__logout-icon">
            <use href={sprite + '#logout'}></use>
          </svg>
          Log Out
        </button>
      )}
    </div>
  );
};

export default UserMenu;
