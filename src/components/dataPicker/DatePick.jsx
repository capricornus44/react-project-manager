import React, { useContext } from 'react';
import { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { LangContext } from '../app/App';
import './DatePick.scss';
import uk from 'date-fns/locale/uk';
const locale = 'uk';
registerLocale('uk', uk);
setDefaultLocale('uk');
// const spell = {
//   spellcheck: 'false',
// };

const DatePick = () => {
  const { language } = useContext(LangContext);
  const [startDate, setStartDate] = useState(new Date());
  //   registerLocale('ua', ua);
  return (
    <div className="picker_container" spellCheck="false">
      <label htmlFor="picker_label">
        <span className="picker_span">
          {language.projectPageForm.startDate}
        </span>
      </label>
      <DatePicker
        locale={locale}
        // locale={language.name === 'UA' ? locale : localeEnglish}
        className="picker"
        selected={startDate}
        onChange={date => setStartDate(date)}
        id="picker"
        dateFormat="dd MMMM"
      />
    </div>
  );
};
export default DatePick;
