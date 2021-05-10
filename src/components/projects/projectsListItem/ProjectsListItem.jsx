import { Link, useLocation } from 'react-router-dom';
import './ProjectsListItem.scss';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const ProjectsListItem = ({ title, description, _id }) => {
  const location = useLocation();
  return (
    <>
      <li className="project_item">
        <Link
          to={{ pathname: `/projects/${_id}`, state: { from: location } }}
          className="project_link"
        >
          <h3 className="project_title">{title}</h3>
          <p className="project_desc">{description}</p>
          <DeleteButton />
        </Link>
      </li>
    </>
  );
};

export default ProjectsListItem;
