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
import { token } from '../auth/authOperations';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';
// const projectID = '6094ff1033a36061e804eb4d';

export const addSprint = ({ title, endDate, duration, projectId }) => async (
  dispatch,
  getState,
) => {
  const sprint = {
    title,
    endDate,
    duration,
  };

  dispatch(addSprintRequest());

  const { accessToken } = getState().auth.token;
  token.set(accessToken);

  try {
    console.log({ title, endDate, duration, projectId });
    const responce = await axios.post(`/sprint/${projectId}`, sprint);
    dispatch(addSprintSuccess(responce.data));
  } catch (error) {
    dispatch(addSprintError(error));
  }
};

export const getSprints = id => async (dispatch, getState) => {
  dispatch(getSprintRequest());

  const { accessToken } = getState().auth.token;
  token.set(accessToken);

  try {
    // console.log(id);
    const responce = await axios.get(`/sprint/${id}`);
    dispatch(getSprintSuccess(responce.data.sprints));
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
    dispatch(deleteSprintSuccess(responce.data.sprints));
  } catch (error) {
    dispatch(deleteSprintError(error));
  }
};
