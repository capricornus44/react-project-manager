import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { AuthReducer } from './auth/authReducers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducer = { auth: AuthReducer, items: () => [] };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({ reducer, middleware });

export default store;
