import React from 'react';
import AuthForm from '../authForm/AuthForm';
import AuthBg from '../authBg/AuthBg';
import './AuthWrapper.scss';

const AuthWrapper = () => {
  return (
    <div className="auth-wrapper">
      <AuthBg />
      <AuthForm />
    </div>
  );
};

export default AuthWrapper;
