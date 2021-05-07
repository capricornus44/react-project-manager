import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsListItem.scss';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const ProjectsListItem = ({ title, description }) => {
  return (
    <>
      <li className="project_item">
        <Link to="/projects/:projectId" className="project_link">
          <h3 className="project_title">{title}</h3>
          <p className="project_desc">{description}</p>
          <DeleteButton />
        </Link>
      </li>
    </>
  );
};

export default ProjectsListItem;
