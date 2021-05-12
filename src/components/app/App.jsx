import React, { createContext } from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import { useLanguage } from '../../hooks/useLanguage';
export const LangContext = createContext();

const App = () => {
  const [language, setLanguage, list] = useLanguage();
  return (
    <LangContext.Provider value={{ language, setLanguage, list }}>
      <Header />
      <Main />
    </LangContext.Provider>
  );
};
export default App;
