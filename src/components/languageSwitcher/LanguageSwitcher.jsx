import React, { useContext } from 'react';
import { LangContext } from '../app/App';

const LanguageSwitcher = () => {
  const { language, list, setLanguage } = useContext(LangContext);
  const onHandleChange = e => {
    setLanguage(e.target.value);
  };
  return (
    <select defaultValue={language.title} onChange={onHandleChange} styles>
      {list.map(item => (
        <option value={item.title}>{item.name}</option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
