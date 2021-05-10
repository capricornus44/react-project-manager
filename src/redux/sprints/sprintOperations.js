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
    // console.log({ title, endDate, duration, projectId });
    const {
      data: { id, _id, ...rest },
    } = await axios.post(`/sprint/${projectId}`, sprint);
    dispatch(addSprintSuccess({ _id: id || _id, ...rest }));
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
    console.log(responce);
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
    await axios.delete(`/sprint/${id}`);
    // console.log(responce);
    dispatch(deleteSprintSuccess(id));
  } catch (error) {
    dispatch(deleteSprintError(error));
  }
};
