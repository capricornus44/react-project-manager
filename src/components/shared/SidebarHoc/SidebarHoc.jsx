import { Link } from '@material-ui/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';
import { LangContext } from '../../app/App';
import AddProjectBtn from '../../projects/addProjectBtn/AddProjectBtn';
import './SidebarHoc.scss';

const SidebarHoc = ({ children }) => {
  const { language } = useContext(LangContext);

  return <div className="sidebar-hoc">{children}</div>;
};

export default SidebarHoc;
