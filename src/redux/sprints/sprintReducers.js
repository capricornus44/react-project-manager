import { createReducer } from '@reduxjs/toolkit';

import {
  addSprintSuccess,
  getSprintRequest,
  getSprintSuccess,
  changeTitleSprintSuccess,
  deleteSprintSuccess,
} from './sprintActions';

export const sprintsReducer = createReducer([], {
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
  [getSprintSuccess]: (_, { payload }) => [...payload],
  [getSprintRequest]: (state, { payload }) => [],

  [changeTitleSprintSuccess]: (state, { payload }) => {
    return state.map(sprint => {
      if (sprint._id === payload._id) {
        return sprint;
      } else return sprint;
    });
  },
});
