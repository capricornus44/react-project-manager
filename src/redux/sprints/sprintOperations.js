import axios from 'axios';
import {
  addSprintError,
  addSprintRequest,
  addSprintSuccess,
  getSprintError,
  getSprintRequest,
  getSprintSuccess,
  changeTitleSprintRequest,
  changeTitleSprintSuccess,
  changeTitleSprintError,
  deleteSprintRequest,
  deleteSprintError,
  deleteSprintSuccess,
} from './sprintActions';

// {
//   "title": "Sprint 1",
//   "endDate": "2020-12-31",
//   "duration": 1
// }

const projectID = '60929ff533a36061e804eaa8';

export const addSprint = ({ title, endDate, duration }) => async dispatch => {
  const sprint = {
    title,
    endDate,
    duration,
  };

  dispatch(addSprintRequest());
  try {
    const responce = await axios.post(`/sprint/${projectID}`, sprint);
    dispatch(addSprintSuccess(responce.data));
  } catch (error) {
    dispatch(addSprintError(error));
  }
};

export const getSprints = () => async dispatch => {
  dispatch(getSprintRequest());
  try {
    const responce = await axios.get(`/sprint/${projectID}`);
    dispatch(getSprintSuccess(responce.data));
  } catch (error) {
    dispatch(getSprintError(error));
  }
};

export const changeTitleSprint = ({ id, title }) => async dispatch => {
  dispatch(changeTitleSprintRequest());
  try {
    const responce = await axios.patch(`/sprint/title/${id}`, title);
    dispatch(changeTitleSprintSuccess(responce.data));
  } catch (error) {
    dispatch(changeTitleSprintError(error));
  }
};

export const deleteSprint = id => async dispatch => {
  dispatch(deleteSprintRequest());
  try {
    const responce = await axios.delete(`/sprint/${id}`);
    dispatch(deleteSprintSuccess(responce.data));
  } catch (error) {
    dispatch(deleteSprintError(error));
  }
};
