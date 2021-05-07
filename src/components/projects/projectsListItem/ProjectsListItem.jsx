import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsListItem.scss';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const ProjectsListItem = () => {
  return (
    <>
      <li className="project_item">
        <Link to="/projects/:projectId" className="project_link">
          <h3 className="project_title">Project 1</h3>
          <p className="project_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <DeleteButton />
        </Link>
      </li>
    </>
  );
};

export default ProjectsListItem;
