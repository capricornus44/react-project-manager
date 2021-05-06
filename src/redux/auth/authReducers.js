// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// export {
//   signupSuccess,
//   signupError,
//   signinSuccess,
//   signinError,
//   logoutSuccess,
//   logoutError,
//   getCurrentUserSuccess,
//   getCurrentUserError,
// } from './authActions';

// const initialUserState = {
//   email: '',
//   id: '',
//   accessToken: '',
//   refreshToken: '',
// };

// const user = createReducer(initialUserState, {
//   [signupSuccess]: (_, { payload }) => payload.data,
//   [signinSuccess]: (_, { payload }) => payload.data,
//   [logoutSuccess]: () => initialUserState,
//   [getCurrentUserSuccess]: (_, { payload }) => payload,
// });

// const accessToken = createReducer(null, {
//   [signupSuccess]: (_, { payload }) => payload.accessToken,
//   [signinSuccess]: (_, { payload }) => payload.accessToken,
//   [logoutSuccess]: () => null,
// });

// const refreshToken = createReducer(null, {
//   [signupSuccess]: (_, { payload }) => payload.refreshToken,
//   [signinSuccess]: (_, { payload }) => payload.refreshToken,
//   [logoutSuccess]: () => null,
// });

// // const setError = (_, { payload }) => payload;

// const error = createReducer(null, {
//   [signupError]: setError,
//   [signinError]: setError,
//   [logoutError]: setError,
//   [getCurrentUserError]: setError,
// });

// export default combineReducers({
//   user,
//   accessToken,
//   refreshToken,
//   error,
// });

// !! template version
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
