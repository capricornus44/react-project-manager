import { createAction } from '@reduxjs/toolkit';

export const addSprintRequest = createAction('@sprint/AddSprintRequest');
export const addSprintSuccess = createAction('@sprint/AddSprintSuccess');
export const addSprintError = createAction('@sprint/AddSprintError');

export const getSprintRequest = createAction('@sprint/getSprintRequest');
export const getSprintSuccess = createAction('@sprint/getSprintSuccess');
export const getSprintError = createAction('@sprint/getSprintError');

export const changeSprintRequest = createAction('@sprint/changeSprintRequest');
export const changeSprintSuccess = createAction('@sprint/changeSprintSuccess');
export const changeSprintError = createAction('@sprint/changeSprintError');

export const deleteSprintRequest = createAction('@sprint/deleteSprintRequest');
export const deleteSprintSuccess = createAction('@sprint/deleteSprintSuccess');
export const deleteSprintError = createAction('@sprint/deleteSprintError');
