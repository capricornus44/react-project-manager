import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../../../redux/projects/projectSelectors';
import './AddMemberData.scss';
import { LangContext } from '../../../app/App';

const AddMemberData = ({ cb, id }) => {
  const { language } = useContext(LangContext);
  const [email, setEmail] = useState('');
  const projects = useSelector(getProjects);

  const members = projects.find(project => {
    if (project._id === id) {
      return project.members;
    }
  });

  useEffect(() => {
    cb({ id, email });
  }, [cb, id, email]);

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
          {language.addMembersForm.email}
        </label>
      </div>
      <h3 className="add-member-data__members-title">
        {language.addMembersForm.members}{' '}
      </h3>
      <ul>
        {members.members.map(el => (
          <li className="add-member-data__members" key={el}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddMemberData;
