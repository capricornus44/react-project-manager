import React from 'react';
import './ProjectsListItem.scss';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const ProjectsListItem = () => {
  return (
    <>
      <li className="project_item">
        <a href="/" className="project_link">
          <h3 className="project_title">Project 1</h3>
          <p className="project_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>

          <DeleteButton />
        </a>
      </li>
      <li className="project_item">
        <a href="/" className="project_link">
          <h3 className="project_title">Дуже довга назва проекту</h3>
          <p className="project_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <DeleteButton />
        </a>
      </li>
      <li className="project_item">
        <a href="/" className="project_link">
          <h3 className="project_title">Project 1</h3>
          <p className="project_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <DeleteButton />
        </a>
      </li>
      <li className="project_item">
        <a href="/" className="project_link">
          <h3 className="project_title">Project 1</h3>
          <p className="project_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <DeleteButton />
        </a>
      </li>
      <li className="project_item">
        <a href="/" className="project_link">
          <h3 className="project_title">Project 1</h3>
          <p className="project_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <DeleteButton />
        </a>
      </li>
      <li className="project_item">
        <a href="/" className="project_link">
          <h3 className="project_title">Project 1</h3>
          <p className="project_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <DeleteButton />
        </a>
      </li>
    </>
  );
};

export default ProjectsListItem;
