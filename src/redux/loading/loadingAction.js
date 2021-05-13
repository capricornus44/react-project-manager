import { createAction } from '@reduxjs/toolkit';

export const loaderOn = createAction('loading/loaderOn');
export const loaderOff = createAction('loading/loaderOff');
