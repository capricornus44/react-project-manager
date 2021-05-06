import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  signupSuccess,
  signupError,
  signinSuccess,
  signinError,
  logoutSuccess,
  logoutError,
  refreshSuccess,
  refreshError,
  userSuccess,
} from './authActions';

const initialUserState = {
  email: '',
  id: '',
};

const user = createReducer(initialUserState, {
  [signupSuccess]: (_, { payload }) => payload.user,
  [userSuccess]: (_, { payload }) => payload,
  [refreshSuccess]: (_, { payload }) => payload,
  [refreshError]: () => initialUserState,
  [logoutSuccess]: () => initialUserState,
});

const token = createReducer('', {
  [signupSuccess]: (_, { payload }) => payload,
  [signinSuccess]: (_, { payload }) => payload,
  [refreshSuccess]: (_, { payload }) => payload,
  [refreshError]: () => '',
  [logoutSuccess]: () => '',
});

const setError = (_, { payload }) => payload;

const error = createReducer('', {
  [signupError]: setError,
  [signinError]: setError,
  [logoutError]: setError,
  [refreshError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
