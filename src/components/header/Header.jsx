import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="" className="logo" width="140" height="42" />
      </NavLink>
    </header>
  );
};

export default Header;
