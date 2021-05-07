import React, { useEffect, useState } from 'react';

const AddProjectForm = ({ cb }) => {
  const [data, setData] = useState({ title: '', description: '' });
  const { title, description } = data;

  const handleChange = e => {
    const { name, value } = e.target;

    setData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    cb({ title, description });
  }, [title, description]);

  return (
    <>
      <div className="auth-form__group">
        <input
          type="text"
          name="title"
          value={title}
          placeholder=" "
          // autoComplete="off"
          required
          onChange={handleChange}
          id="name"
          className="auth-form__input"
        />
        <label className="auth-form__label" htmlFor="name">
          Назва проекту
        </label>
      </div>
      <div className="auth-form__group">
        <input
          type="text"
          name="description"
          value={description}
          placeholder=" "
          // autoComplete="off"
          required
          onChange={handleChange}
          id="desc"
          className="auth-form__input"
        />
        <label className="auth-form__label" htmlFor="desc">
          Опис
        </label>
      </div>
    </>
  );
};

export default AddProjectForm;
