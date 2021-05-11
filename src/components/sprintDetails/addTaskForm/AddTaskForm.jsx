import React, { useEffect, useState } from 'react';
import './AddTaskForm.scss';

const AddTaskForm = ({ callback, sprintId }) => {
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
        <input
          className="addTaskForm__input"
          type="text"
          name="title"
          value={title}
          placeholder="Назва задачі"
          // autoComplete="off"
          required
          onChange={handleChange}
        />
        <input
          className="addTaskForm__input duration"
          type="number"
          name="hoursPlanned"
          value={hoursPlanned}
          placeholder="Заплановано годин"
          // autoComplete="off"
          required
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default AddTaskForm;
