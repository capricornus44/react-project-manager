import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
// import { registerLocale } from 'react-datepicker';
// import ua from 'date-fns/locale/ua';
// import 'dayjs/locale/ua';
import './DatePick.scss';

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  //   registerLocale('ua', ua);
  return (
    <div className="picker_container">
      <label htmlFor="picker_label">
        <span className="picker_span">Дата початку</span>
      </label>
      <DatePicker
        // locale="ua"
        className="picker"
        selected={startDate}
        onChange={date => setStartDate(date)}
        id="picker"
        dateFormat="MMMM dd"
      />
    </div>
  );
};
export default DatePick;
