import React, { useEffect, useState, useContext } from 'react';
import './AddTaskForm.scss';
import { LangContext } from '../../app/App';

const AddTaskForm = ({ callback, sprintId }) => {
  const { language } = useContext(LangContext);
  const [data, setData] = useState({ title: '', hoursPlanned: '' });
  const { title, hoursPlanned } = data;

  const handleChange = e => {
    const { name, value } = e.target;

    setData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    callback({ title, hoursPlanned, sprintId });
  }, [callback, title, hoursPlanned, sprintId]);

  //   const [name, setName] = useState('');
  //   const onUpdateName = e => {
  //     setName(e.target.value);
  //   };

  //   const [duration, setDuration] = useState('');
  //   const onUpdateDuration = e => {
  //     setDuration(e.target.value);
  //   };

  return (
    <>
      <div className="addTaskForm__box">
        <div className="addTaskForm__group">
          <input
            className="addTaskForm__input"
            type="text"
            name="title"
            value={title}
            placeholder=" "
            // autoComplete="off"
            id="title"
            required
            onChange={handleChange}
          />
          <label className="addTaskForm__label" htmlFor="title">
            {language.sprintPageForm.taskName}
          </label>
        </div>
        <div className="addTaskForm__group">
          <input
            className="addTaskForm__input"
            type="number"
            name="hoursPlanned"
            value={hoursPlanned}
            placeholder=" "
            // autoComplete="off"
            id="hoursPlanned"
            required
            onChange={handleChange}
          />
          <label className="addTaskForm__label" htmlFor="hoursPlanned">
            {language.sprintPageForm.plannedHours}
          </label>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
