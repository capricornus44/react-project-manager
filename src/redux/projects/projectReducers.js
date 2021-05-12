import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectSuccess,
  getProjectSuccess,
  deleteProjectSuccess,
  changeTitleProjectSuccess,
  getProjectRequest,
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

  [changeTitleProjectSuccess]: (state, { payload }) => {
    return state.map(proj => {
      if (proj._id === payload._id) {
        // proj.title = payload.newTitle;
        return proj;
      } else return proj;
    });
  },
  [getProjectRequest]: (state, { payload }) => [],
});

export default projectsReducer;
