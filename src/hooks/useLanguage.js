import { useEffect, useState } from 'react';
import languages from '../languages';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const storageValue = JSON.parse(localStorage.getItem('language'));
    return languages[storageValue] || languages.english;
  });

  const toggler = () => {
    setLanguage(prev =>
      prev.title === 'english' ? languages.ukrainian : languages.english,
    );
  };

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(language.title));
  }, [language]);

  const languagesList = Object.keys(languages).map(key => ({
    title: key,
    name: languages[key].name,
  }));

  return [language, toggler, languagesList];
};
