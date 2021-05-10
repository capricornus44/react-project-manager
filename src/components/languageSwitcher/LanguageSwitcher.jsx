import React, { useContext } from 'react';
import { LangContext } from '../app/App';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { language, list, setLanguage } = useContext(LangContext);
  const onHandleChange = e => {
    setLanguage(e.target.value);
  };
  return (
    <select
      defaultValue={language.title}
      onChange={onHandleChange}
      className="lang-select"
    >
      {list.map(item => (
        <option className="lang-select__option" value={item.title}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
