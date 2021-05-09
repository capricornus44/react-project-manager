import { createAction } from '@reduxjs/toolkit';

const signupRequest = createAction('auth/signupRequest');
const signupSuccess = createAction('auth/signupSuccess');
const signupError = createAction('auth/signupError');

const signinRequest = createAction('auth/signinRequest');
const signinSuccess = createAction('auth/signinSuccess');
const signinError = createAction('auth/signinError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const refreshRequest = createAction('auth/refreshRequest');
const refreshSuccess = createAction('auth/refreshSuccess');
const refreshError = createAction('auth/refreshError');

const userSuccess = createAction('members/userSuccess');

const clearError = createAction('auth/clearError');

export {
  signupRequest,
  signupSuccess,
  signupError,
  signinRequest,
  signinSuccess,
  signinError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  userSuccess,
  clearError,
};
