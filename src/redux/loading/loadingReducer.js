import { createReducer } from '@reduxjs/toolkit';
import { loaderOn, loaderOff } from './loadingAction';

export const loader = createReducer(false, {
  [loaderOn]: () => true,
  [loaderOff]: () => false,
});
