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
import { getError } from '../error/errorHandler';
import { loaderOff, loaderOn } from '../loading/loadingAction';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const getProjectsOperation = () => async (dispatch, getState) => {
  dispatch(getProjectRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);

  dispatch(loaderOn());

  try {
    const responce = await axios.get('/project');

    dispatch(getProjectSuccess(responce.data));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: getProjectsOperation,
        errorIdent: 'getProjectError',
      }),
    );
  } finally {
    dispatch(loaderOff());
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

  dispatch(loaderOn());

  try {
    const {
      data: { id, _id, ...rest },
    } = await axios.post(`/project`, project);
    dispatch(addProjectSuccess({ _id: id || _id, ...rest }));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => addProjectsOperation({ title, description }),
        errorIdent: 'addProjectError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

const deleteProjectsOperation = id => async dispatch => {
  dispatch(deleteProjectRequest());

  dispatch(loaderOn());
  try {
    await axios.delete(`/project/${id}`);

    dispatch(deleteProjectSuccess(id));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => deleteProjectsOperation(id),
        errorIdent: 'deleteProjectError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

const changeTitleProject = ({ id, title }) => async dispatch => {
  dispatch(changeTitleProjectRequest());
  dispatch(loaderOn());

  try {
    // const newTitle = { title };
    const responce = await axios.patch(`/project/title/${id}`, { title });

    dispatch(changeTitleProjectSuccess({ ...responce.data, _id: id }));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => changeTitleProject({ id, title }),
        errorIdent: 'changeTitleProjectError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

const addMemberProject = ({ id, email }) => async (dispatch, getState) => {
  dispatch(addMemberProjectRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  dispatch(loaderOn());

  try {
    const response = await axios.patch(`/project/contributor/${id}`, { email });
    dispatch(
      addMemberProjectSuccess({ members: response.data.newMembers, id }),
    );
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => addMemberProject({ id, email }),
        errorIdent: 'addMemberProjectError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

export {
  getProjectsOperation,
  addProjectsOperation,
  addMemberProject,
  deleteProjectsOperation,
  changeTitleProject,
};
