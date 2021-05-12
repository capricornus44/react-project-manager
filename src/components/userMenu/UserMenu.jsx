import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from '../../redux/auth/authSelectors';
import { logoutSuccess } from '../../redux/auth/authActions';
import sprite from '../../assets/icons/sprite.svg';
import './UserMenu.scss';

import { LangContext } from '../app/App';

const UserMenu = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  const { language } = useContext(LangContext);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };

  return (
    <div className="user">
      {!isMobile ? <span className="user__greeting">{userEmail}</span> : null}

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
          {language.userMenu.exit}
        </button>
      )}
    </div>
  );
};

export default UserMenu;
