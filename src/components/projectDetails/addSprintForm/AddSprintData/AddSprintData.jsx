import React, { useEffect, useState, useContext } from 'react';
import './AddSprintData.scss';
import { LangContext } from '../../../app/App';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import '../../../dataPicker/DatePick.scss';
import uk from 'date-fns/locale/uk';
const locale = 'uk';
registerLocale('uk', uk);
setDefaultLocale('uk');

const AddSprintData = ({ cb, projectId }) => {
  const { language } = useContext(LangContext);

  const [endDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  const [data, setData] = useState({
    title: '',
    // endDate: '2021-12-28',
    duration: '1',
  });
  const { title, duration } = data;

  useEffect(() => {
    // console.log(projectId)
    cb({ title, endDate, duration, projectId });
  }, [title, endDate, duration, projectId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="add-sprint-data__form">
        <input
          className="add-sprint-data__input"
          placeholder=" "
          type="text"
          name="title"
          id="name"
          value={title}
          required
          onChange={handleChange}
        />
        <label className="add-sprint-data__label" htmlFor="name">
          {language.projectPageForm.sprintName}
        </label>
      </div>
      <div className="add-sprint-data__group">
        <div className="add-sprint-data__form add-sprint-data__calender">
          <div className="add-sprint-data__input add-sprint-data__input-calender">
            <DatePicker
              placeholder=" "
              locale={locale}
              className="picker"
              selected={endDate}
              // onSelect={value}
              onChange={date => setStartDate(date)}
              id="picker"
              dateFormat="dd MMMM"
            />
          </div>
          <label className="add-sprint-data__label " htmlFor="picker_label">
            <span className="picker_span">
              {language.projectPageForm.expireDate}
            </span>
          </label>
        </div>
        {/* <DatePick value={endDate} /> */}
        {/* </div> */}
        <div className="add-sprint-data__form">
          <input
            className="add-sprint-data__input add-sprint-data_duration"
            placeholder=" "
            type="text"
            name="duration"
            value={duration}
            required
            onChange={handleChange}
          />
          <label className="add-sprint-data__label">
            {language.projectPageForm.duration}
          </label>
        </div>
      </div>
    </>
  );
};

export default AddSprintData;
