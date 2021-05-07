import { createAction } from '@reduxjs/toolkit';

const addProjectRequest = createAction('prodj/addProjectRequest');
const addProjectSuccess = createAction('prodj/addProjectSuccess');
const addProjectError = createAction('prodj/addProjectError');

const getProjectRequest = createAction('prodj/getProjectRequest');
const getProjectSuccess = createAction('prodj/getProjectSuccess');
const getProjectError = createAction('prodj/getProjectError');

const changeTitleProjectRequest = createAction(
  'prodj/changeTitleProjectRequest',
);
const changeTitleProjectSuccess = createAction(
  'prodj/changeTitleProjectSuccess',
);
const changeTitleProjectError = createAction('prodj/changeTitleProjectError');

const deleteProjectRequest = createAction('prodj/deleteProjectRequest');
const deleteProjectSuccess = createAction('prodj/deleteProjectSuccess');
const deleteProjectError = createAction('prodj/deleteProjectError');

export {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  getProjectRequest,
  getProjectSuccess,
  getProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  changeTitleProjectRequest,
  changeTitleProjectSuccess,
  changeTitleProjectError,
};
