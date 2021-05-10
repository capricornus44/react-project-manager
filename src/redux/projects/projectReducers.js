import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectSuccess,
  getProjectSuccess,
  deleteProjectSuccess,
} from './projectActions';

const initialState = {
  projects: [],
};

const projectsReducer = createReducer(initialState, {
  [getProjectSuccess]: (_, { payload }) => [...payload],
  [addProjectSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteProjectSuccess]: (state, { payload }) =>
    state.filter(project => project.id !== payload),
});

export default projectsReducer;
