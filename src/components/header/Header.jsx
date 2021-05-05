import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../userMenu/UserMenu';
import logo from '../../assets/icons/logo.svg';
import './Header.scss';

const Header = () => {
  const isAuth = false;

  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="" className="logo" width="140" height="42" />
      </NavLink>
      {isAuth && <UserMenu />}
    </header>
  );
};

export default Header;
