import React, { useEffect, useState, useContext } from 'react';
import { LangContext } from '../../app/App';
import './AddProjectForm.scss';

const AddProjectForm = ({ cb }) => {
  const { language } = useContext(LangContext);
  const [data, setData] = useState({ title: '', description: '' });
  const { title, description } = data;

  const handleChange = e => {
    const { name, value } = e.target;

    setData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    cb({ title, description });
  }, [title, description, cb]);

  return (
    <>
      <div className="projects-form__group">
        <input
          type="text"
          name="title"
          value={title}
          placeholder=" "
          // autoComplete="off"
          required
          onChange={handleChange}
          id="name"
          className="projects-form__input"
        />
        <label className="projects-form__label" htmlFor="name">
          {language.projectsPageForm.projectName}
        </label>
      </div>
      <div className="projects-form__group">
        <input
          type="text"
          name="description"
          value={description}
          placeholder=" "
          // autoComplete="off"
          required
          onChange={handleChange}
          id="desc"
          className="projects-form__input"
        />
        <label className="projects-form__label" htmlFor="desc">
          {language.projectsPageForm.projectDescription}
        </label>
      </div>
    </>
  );
};

export default AddProjectForm;
