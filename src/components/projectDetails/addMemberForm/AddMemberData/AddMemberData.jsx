import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../../../redux/projects/projectSelectors';
import './AddMemberData.scss';

const AddMemberData = ({ cb, id }) => {
  const [email, setEmail] = useState('');
  const projects = useSelector(getProjects);

  const members = projects.find(project => {
    if (project._id === id) {
      return project.members;
    }
  });

  console.log(members.members);

  useEffect(() => {
    cb({ id, email });
  }, [email]);

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="add-member-data__form">
        <input
          className="add-member-data__input"
          placeholder=" "
          type="email"
          name="title"
          id="name"
          value={email}
          required
          onChange={handleChange}
        />
        <label className="add-member-data__label" htmlFor="name">
          Введіть e-mail
        </label>
      </div>
      <h3 className="add-member-data__members-title">Додані користувачі: </h3>
      <ul>
        {members.members.map(el => (
          <li className="add-member-data__members">{el}</li>
        ))}
      </ul>
    </>
  );
};

export default AddMemberData;
