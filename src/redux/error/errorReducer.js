import { createReducer } from '@reduxjs/toolkit';
import { refreshRequest } from '../auth/authActions';
import {
  addProjectError,
  deleteProjectError,
  getProjectError,
} from '../projects/projectActions';

import {
  addSprintError,
  getSprintError,
  deleteSprintError,
} from '../sprints/sprintActions';

import {
  getTaskError,
  deleteTaskError,
  addTaskError,
} from '../tasks/taskActions';

import { resetError, putError } from './errorAction';

const setError = (_, { payload }) => payload;

export const errorReducer = createReducer(null, {
  [addProjectError]: setError,
  [getProjectError]: setError,
  [deleteProjectError]: setError,
  [addSprintError]: setError,
  [getSprintError]: setError,
  [deleteSprintError]: setError,
  [addTaskError]: setError,
  [getTaskError]: setError,
  [deleteTaskError]: setError,
  [refreshRequest]: () => null,
  [resetError]: () => null,
  // [putError]: (_, { payload }) => payload,
});
