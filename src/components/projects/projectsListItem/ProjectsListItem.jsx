import { Link, useLocation } from 'react-router-dom';
import './ProjectsListItem.scss';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const ProjectsListItem = ({ title, description, _id: id }) => {
  const location = useLocation();
  return (
    <>
      <li className="project_item">
        <Link
          to={{ pathname: `/projects/${id}`, state: { from: location, title } }}
          className="project_link"
        >
          <h3 className="project_title">{title}</h3>
          <p className="project_desc">{description}</p>
          <DeleteButton id={id} />
        </Link>
      </li>
    </>
  );
};

export default ProjectsListItem;
