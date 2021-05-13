import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectSuccess,
  getProjectSuccess,
  deleteProjectSuccess,
  changeTitleProjectSuccess,
  getProjectRequest,
  addMemberProjectSuccess,
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
        const newProdj = { ...proj };
        newProdj.title = payload.newTitle;
        return newProdj;
      } else return proj;
    });
  },
  [getProjectRequest]: () => initialState.projects,
  [addMemberProjectSuccess]: (state, { payload }) => {
    console.log(payload, state);
    return state.map(project => {
      if (project._id !== payload.id) return project;

      const newProject = { ...project };
      newProject.members = payload.members;
      return newProject;
    });
  },
});

export default projectsReducer;
