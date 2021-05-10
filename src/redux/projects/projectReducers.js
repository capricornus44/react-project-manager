import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectSuccess,
  getProjectSuccess,
  deleteProjectSuccess,
} from './projectActions';

const initialState = {
  projects: [],
};

const projectsReducer = createReducer(initialState.projects, {
  [getProjectSuccess]: (_, { payload }) => [...payload],
  [addProjectSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteProjectSuccess]: (state, { payload }) => {
    return state.filter(project => project._id !== payload);
  },
});

export default projectsReducer;
