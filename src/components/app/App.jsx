import React, { createContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/Header';
import Main from '../main/Main';
import { useLanguage } from '../../hooks/useLanguage';
import { getIsAuthError } from '../../redux/error/errorSelector';
import { refreshOperation } from '../../redux/auth/authOperations';

export const LangContext = createContext();

const App = () => {
  const dispatch = useDispatch();
  const isAuthError = useSelector(getIsAuthError);

  useEffect(() => {
    isAuthError && dispatch(refreshOperation());

    // if (isAuthError) {
    //   dispatch(refreshOperation());
    // }
  }, [isAuthError, dispatch]);

  const [language, setLanguage, list] = useLanguage();
  return (
    <LangContext.Provider value={{ language, setLanguage, list }}>
      <Header />
      <Main />
    </LangContext.Provider>
  );
};
export default App;
