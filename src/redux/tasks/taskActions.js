import { createAction } from '@reduxjs/toolkit';

export const addTaskRequest = createAction('@task/AddTaskRequest');
export const addTaskSuccess = createAction('@task/AddTaskSuccess');
export const addTaskError = createAction('@task/AddTaskError');

export const getTaskRequest = createAction('@task/getTaskRequest');
export const getTaskSuccess = createAction('@task/getTaskSuccess');
export const getTaskError = createAction('@task/getTaskError');

export const changeTaskHoursRequest = createAction(
  '@task/changeTaskHoursRequest',
);
export const changeTaskHoursSuccess = createAction(
  '@task/changeTaskHoursSuccess',
);
export const changeTaskHoursError = createAction('@task/changeTaskHoursError');

export const deleteTaskRequest = createAction('@task/deleteTaskRequest');
export const deleteTaskSuccess = createAction('@task/deleteTaskSuccess');
export const deleteTaskError = createAction('@task/deleteTaskError');
