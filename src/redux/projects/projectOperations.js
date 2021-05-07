import axios from 'axios';
import {
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
} from './projectActions';
import { token } from '../auth/authOperations';
axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const getProjectsOperation = () => async (dispatch, getState) => {
  dispatch(getProjectRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  try {
    const responce = await axios.get('/project');
    dispatch(getProjectSuccess(responce.data));
  } catch (error) {
    dispatch(getProjectError(error.message));
  }
};

const addProjectsOperation = ({ title, description }) => async (
  dispatch,
  getState,
) => {
  const project = {
    title,
    description,
  };

  dispatch(addProjectRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);

  try {
    const responce = await axios.post(`/project`, project);
    dispatch(addProjectSuccess(responce.data));
  } catch (error) {
    dispatch(addProjectError(error.message));
  }
};

const deleteProjectsOperation = id => async dispatch => {
  dispatch(deleteProjectRequest());
  try {
    const responce = await axios.delete(`/project/${id}`);
    dispatch(deleteProjectSuccess(responce.data));
  } catch (error) {
    dispatch(deleteProjectError(error.message));
  }
};

const changeTitleProject = ({ id, title }) => async dispatch => {
  dispatch(changeTitleProjectRequest());
  try {
    const responce = await axios.patch(`/project/title/${id}`, title);
    dispatch(changeTitleProjectSuccess(responce.data));
  } catch (error) {
    dispatch(changeTitleProjectError(error.message));
  }
};

export {
  getProjectsOperation,
  addProjectsOperation,
  deleteProjectsOperation,
  changeTitleProject,
};
