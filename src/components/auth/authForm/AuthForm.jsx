import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  signinOperation,
  signupOperation,
} from '../../../redux/auth/authOperations'; // вставить нужное название операции регистрации и операции логинизации
import FormButton from '../../shared/formButton/FormButton';
import './AuthForm.scss';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const resetInputs = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    isSignupForm()
      ? dispatch(signupOperation({ email, password })) // вставить нужное название операции регистрации
      : dispatch(signinOperation({ email, password })); // вставить нужное название операции логинизации

    resetInputs();
  };

  const isSignupForm = () => {
    return location.pathname === '/signup';
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="auth-form__title">
          {isSignupForm() ? 'Реєстрація' : 'Вхід'}
        </h1>

        <div className="auth-form__group">
          <input
            type="email"
            name="email"
            value={email}
            placeholder=" "
            // autoComplete="off"
            required
            onChange={handleChange}
            id="email"
            className="auth-form__input"
          />
          <label className="auth-form__label" htmlFor="email">
            Email
          </label>
        </div>

        <div className="auth-form__group">
          <input
            type="password"
            name="password"
            value={password}
            placeholder=" "
            // autoComplete="off"
            required
            onChange={handleChange}
            id="password"
            className="auth-form__input"
          />
          <label className="auth-form__label" htmlFor="password">
            Пароль
          </label>
        </div>

        {isSignupForm() && (
          <div className="auth-form__group">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder=" "
              // autoComplete="off"
              required
              onChange={handleChange}
              id="confirmPassword"
              className="auth-form__input"
            />
            <label className="auth-form__label" htmlFor="confirmPassword">
              Повторіть пароль
            </label>
          </div>
        )}

        <FormButton>{isSignupForm() ? 'Зареєструватися' : 'Увійти'}</FormButton>

        {isSignupForm() ? (
          <p className="auth-form__redirect-question">
            Маєте акаунт?
            <NavLink to="/signin" className="auth-form__redirect-link">
              Увійти
            </NavLink>
          </p>
        ) : (
          <p className="auth-form__redirect-question">
            Немає акаунту?
            <NavLink to="/signup" className="auth-form__redirect-link">
              Зареєструватись
            </NavLink>
          </p>
        )}
      </form>
    </>
  );
};

export default AuthForm;
