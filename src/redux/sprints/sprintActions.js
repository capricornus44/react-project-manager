import { createAction } from '@reduxjs/toolkit';

export const addSprintRequest = createAction('@sprint/AddSprintRequest');
export const addSprintSuccess = createAction('@sprint/AddSprintSuccess');
export const addSprintError = createAction('@sprint/AddSprintError');

export const getSprintRequest = createAction('@sprint/getSprintRequest');
export const getSprintSuccess = createAction('@sprint/getSprintSuccess');
export const getSprintError = createAction('@sprint/getSprintError');

export const changeTitleSprintRequest = createAction(
  '@sprint/changeTitleSprintRequest',
);
export const changeTitleSprintSuccess = createAction(
  '@sprint/changeTitleSprintSuccess',
);
export const changeTitleSprintError = createAction(
  '@sprint/changeTitleSprintError',
);

export const deleteSprintRequest = createAction('@sprint/deleteSprintRequest');
export const deleteSprintSuccess = createAction('@sprint/deleteSprintSuccess');
export const deleteSprintError = createAction('@sprint/deleteSprintError');
