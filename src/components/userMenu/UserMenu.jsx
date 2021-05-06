import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from '../../redux/auth/authSelectors';
import { logoutSuccess } from '../../redux/auth/authActions';
import sprite from '../../assets/icons/sprite.svg';
import './UserMenu.scss';

const UserMenu = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };

  return (
    <div className="user">
      <span className="user__greeting">{userEmail}</span>

      {isMobile ? (
        <button
          type="button"
          className="user__logout-button-mobile"
          aria-label="logout button"
          onClick={onLogoutSuccess}
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
          onClick={onLogoutSuccess}
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
