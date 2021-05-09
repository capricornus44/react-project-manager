import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import FormButton from '../../shared/formButton/FormButton';
import { getAuthError } from '../../../redux/auth/authSelectors';
import { clearError } from '../../../redux/auth/authActions';
import {
  signinOperation,
  signupOperation,
} from '../../../redux/auth/authOperations';
import { validationSchema } from '../validation/validationSchema';
import './AuthForm.scss';

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const authError = useSelector(getAuthError);
  const [signupError, setSignupError] = useState({
    isError: false,
    message: '',
  });

  useEffect(() => {
    if (authError?.includes('code 409')) {
      setSignupError({
        isError: true,
        message: 'Користувач з таким іменем вже існує',
      });
      setTimeout(() => {
        dispatch(clearError());
        setSignupError({ isError: false, message: '' });
      }, 3000);
    }
  }, [authError, dispatch]);

  const isSignupForm = () => {
    return location.pathname === '/signup';
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={({ email, password, confirmPassword }, error) => {
          if (isSignupForm()) {
            if (password !== confirmPassword) {
              error.setErrors({
                confirmPassword: 'Паролі не співпадають',
              });
              return;
            }

            dispatch(signupOperation({ email, password }));
          } else {
            dispatch(signinOperation({ email, password }));
          }
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="auth-form">
            <h1 className="auth-form__title">
              {isSignupForm() ? 'Реєстрація' : 'Вхід'}
            </h1>

            <div className="auth-form__group">
              <Field
                type="email"
                name="email"
                value={values.email}
                placeholder=" "
                // autoComplete="off"
                id="email"
                className="auth-form__input"
              />
              <label className="auth-form__label" htmlFor="email">
                Email
              </label>

              {(errors.email && touched.email) || signupError.isError ? (
                <p className="error">
                  {signupError.isError ? signupError.message : errors.email}
                </p>
              ) : null}
            </div>

            <div className="auth-form__group">
              <Field
                type="password"
                name="password"
                value={values.password}
                placeholder=" "
                // autoComplete="off"
                id="password"
                className="auth-form__input"
              />
              <label className="auth-form__label" htmlFor="password">
                Пароль
              </label>
              {errors.password && touched.password ? (
                <p className="error">{errors.password}</p>
              ) : null}
            </div>

            {isSignupForm() && (
              <div className="auth-form__group">
                <Field
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  placeholder=" "
                  // autoComplete="off"
                  id="confirmPassword"
                  className="auth-form__input"
                />
                <label className="auth-form__label" htmlFor="confirmPassword">
                  Повторіть пароль
                </label>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="error">{errors.confirmPassword}</p>
                ) : null}
              </div>
            )}

            <FormButton>
              {isSignupForm() ? 'Зареєструватися' : 'Увійти'}
            </FormButton>

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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
