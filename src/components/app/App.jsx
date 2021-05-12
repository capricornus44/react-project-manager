import React, { createContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/Header';
import Main from '../main/Main';
import { useLanguage } from '../../hooks/useLanguage';
import { getIsAuthError } from '../../redux/error/errorSelector';
import { refreshOperation } from '../../redux/auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LangContext = createContext();

const App = () => {
  const dispatch = useDispatch();
  const isAuthError = useSelector(getIsAuthError);

  useEffect(() => {
    // isAuthError && dispatch(refreshOperation());

    if (isAuthError) {
      dispatch(refreshOperation());
      toast.error('Повторiть останню дiю');
    }
  }, [isAuthError, dispatch]);

  const [language, setLanguage, list] = useLanguage();
  return (
    <LangContext.Provider value={{ language, setLanguage, list }}>
      <Header />
      <Main />
      <ToastContainer autoClose={2500} position="top-right" type="error" />
    </LangContext.Provider>
  );
};
export default App;
