import axios from 'axios';
import moment from 'moment';
import {
  addSprintRequest,
  addSprintSuccess,
  getSprintRequest,
  getSprintSuccess,
  changeTitleSprintRequest,
  changeTitleSprintSuccess,
  deleteSprintRequest,
  deleteSprintSuccess,
} from './sprintActions';
import { token } from '../auth/authOperations';
import { getError } from '../error/errorHandler';
import { loaderOff, loaderOn } from '../loading/loadingAction';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

export const addSprint =
  ({ title, endDate, duration, projectId }) =>
  async (dispatch, getState) => {
    const sprint = {
      title,
      endDate: moment(endDate).format('YYYY-M-D'),
      duration: Number(duration),
    };

    dispatch(addSprintRequest());

    const { accessToken } = getState().auth.token;
    token.set(accessToken);
    dispatch(loaderOn());

    try {
      const {
        data: { id, _id, ...rest },
      } = await axios.post(`/sprint/${projectId}`, sprint);
      dispatch(addSprintSuccess({ _id: id || _id, ...rest }));
    } catch (error) {
      dispatch(
        getError({
          error,
          requestCallback: () =>
            addSprint({ title, endDate, duration, projectId }),
          errorIdent: 'addSprintError',
        }),
      );
    } finally {
      dispatch(loaderOff());
    }
  };

export const getSprints = id => async (dispatch, getState) => {
  dispatch(getSprintRequest());

  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  dispatch(loaderOn());

  try {
    const responce = await axios.get(`/sprint/${id}`);

    dispatch(getSprintSuccess(responce.data.sprints));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => getSprints(id),
        errorIdent: 'getSprintError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

export const changeTitleSprint =
  ({ id, title }) =>
  async dispatch => {
    dispatch(changeTitleSprintRequest());
    dispatch(loaderOn());

    try {
      const responce = await axios.patch(`/sprint/title/${id}`, { title });
      dispatch(changeTitleSprintSuccess({ ...responce.data, _id: id }));
    } catch (error) {
      dispatch(
        getError({
          error,
          requestCallback: () => changeTitleSprint({ id, title }),
          errorIdent: 'changeTitleSprintError',
        }),
      );
    } finally {
      dispatch(loaderOff());
    }
  };

export const deleteSprint = id => async dispatch => {
  dispatch(deleteSprintRequest());
  dispatch(loaderOn());

  try {
    await axios.delete(`/sprint/${id}`);

    dispatch(deleteSprintSuccess(id));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => deleteSprint(id),
        errorIdent: 'deleteSprintError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};
