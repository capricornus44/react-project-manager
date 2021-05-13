import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../userMenu/UserMenu';
import logo from '../../assets/icons/logo.svg';
import Container from '../container/Container';
import HeaderInterlayer from './headerInterlayer/HeaderInterlayer';
import { isAuthSelector } from '../../redux/auth/authSelectors';
import './Header.scss';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

const Header = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <header className="header">
      <Container>
        <HeaderInterlayer>
          <NavLink to="/projects">
            <img src={logo} alt="" className="logo" width="140" height="42" />
          </NavLink>
          {isAuth && <UserMenu />}
          <LanguageSwitcher />
        </HeaderInterlayer>
      </Container>
    </header>
  );
};

export default Header;
