import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../userMenu/UserMenu';
import logo from '../../assets/icons/logo.svg';
import Container from '../container/Container';
import './Header.scss';

const Header = () => {
  const isAuth = true;

  return (
    <header className="header">
      <Container>
        <NavLink to="/">
          <img src={logo} alt="" className="logo" width="140" height="42" />
        </NavLink>
        {isAuth && <UserMenu />}
      </Container>
    </header>
  );
};

export default Header;
