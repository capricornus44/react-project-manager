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
  addMemberProjectError,
  addMemberProjectRequest,
  addMemberProjectSuccess,
} from './projectActions';
import { token } from '../auth/authOperations';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const getProjectsOperation = () => async (dispatch, getState) => {
  dispatch(getProjectRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  try {
    const responce = await axios.get('/project');
    // console.log(responce.data);
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
    const {
      data: { id, _id, ...rest },
    } = await axios.post(`/project`, project);
    dispatch(addProjectSuccess({ _id: id || _id, ...rest }));
  } catch (error) {
    dispatch(addProjectError(error.message));
  }
};

const deleteProjectsOperation = id => async dispatch => {
  dispatch(deleteProjectRequest());
  try {
    await axios.delete(`/project/${id}`);

    dispatch(deleteProjectSuccess(id));
    // window.location.reload();
  } catch (error) {
    dispatch(deleteProjectError(error.message));
  }
};

const changeTitleProject = ({ id, title }) => async dispatch => {
  dispatch(changeTitleProjectRequest());
  try {
    // const newTitle = { title };
    const responce = await axios.patch(`/project/title/${id}`, { title });
    // console.log(responce.data);
    dispatch(changeTitleProjectSuccess({ ...responce.data, _id: id }));
  } catch (error) {
    console.log(error);
    dispatch(changeTitleProjectError(error.message));
  }
};

const addMemberProject = ({ id, email }) => async (dispatch, getState) => {
  dispatch(addMemberProjectRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  console.log(id, email);
  try {
    const responce = await axios.patch(`/project/contributor/${id}`, { email });
    dispatch(addMemberProjectSuccess(responce.data));
  } catch (error) {
    console.log(error);
    dispatch(addMemberProjectError(error));
  }
};

export {
  getProjectsOperation,
  addProjectsOperation,
  addMemberProject,
  deleteProjectsOperation,
  changeTitleProject,
};
