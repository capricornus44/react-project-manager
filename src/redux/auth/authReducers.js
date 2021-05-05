import { createReducer } from '@reduxjs/toolkit';
import { signup, signin, logout } from './authActions';

const initialState = {
  email: '',
  idToken: '',
  refreshToken: '',
};

const AuthReducer = createReducer(
  { ...initialState },
  {
    [signup]: (_, { payload }) => payload,
    [signin]: (_, { payload }) => payload,
    [logout]: () => initialState,
  },
);

export { AuthReducer };
