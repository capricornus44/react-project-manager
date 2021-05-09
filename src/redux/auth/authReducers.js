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
  clearError,
} from './authActions';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialUserState = {
  email: '',
  id: '',
};

const userReducer = createReducer(initialUserState, {
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
  [clearError]: () => '',
});

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['email'],
};

const authReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  token,
  error,
});

export default authReducer;
