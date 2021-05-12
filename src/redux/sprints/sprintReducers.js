import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  getSprintRequest,
  getSprintSuccess,
  getSprintError,
  changeSprintRequest,
  changeSprintSuccess,
  changeSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
} from './sprintActions';

export const sprintsReducer = createReducer([], {
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
  [getSprintSuccess]: (_, { payload }) => [...payload],
  [getSprintRequest]: (state, { payload }) => [],
});

// export const SprintRequest
