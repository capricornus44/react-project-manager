import axios from 'axios';
import {
  getTaskRequest,
  getTaskSuccess,
  addTaskRequest,
  addTaskSuccess,
  deleteTaskRequest,
  deleteTaskSuccess,
  changeTaskHoursRequest,
  changeTaskHoursSuccess,
} from './taskActions';

// const projId="6098fb0c33a36061e804eee2";
import { token } from '../auth/authOperations';
import { getError } from '../error/errorHandler';
import { loaderOff, loaderOn } from '../loading/loadingAction';
// const sprintId = '6098fba433a36061e804eee5';
axios.defaults.baseURL = 'https://sbc-backend.goit.global/';

const addTask =
  ({ sprintId, title, hoursPlanned }) =>
  async (dispatch, getState) => {
    dispatch(addTaskRequest());
    const { accessToken } = getState().auth.token;
    token.set(accessToken);
    dispatch(loaderOn());

    try {
      const {
        data: { id, _id, ...rest },
      } = await axios.post(`/task/${sprintId}`, { title, hoursPlanned });

      dispatch(
        addTaskSuccess({
          _id: id || _id,
          ...rest,
          hoursPlanned: Number(hoursPlanned),
        }),
      );

    } catch (error) {
      dispatch(
        getError({
          error,
          requestCallback: () => addTask({ sprintId, title, hoursPlanned }),
          errorIdent: 'addTaskError',
        }),
      );
    } finally {
      dispatch(loaderOff());
    }
  };

const getTask = sprintId => async (dispatch, getState) => {
  dispatch(getTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  dispatch(loaderOn());

  try {
    const res = await axios.get(`/task/${sprintId}`);
    res.data.constructor.name === 'Array'
      ? dispatch(getTaskSuccess(res.data))
      : dispatch(getTaskSuccess([]));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => getTask(sprintId),
        errorIdent: 'getTaskError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

const deleteTask = taskId => async (dispatch, getState) => {
  dispatch(deleteTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  dispatch(loaderOn());

  try {
    await axios.delete(`/task/${taskId}`);
    dispatch(deleteTaskSuccess(taskId));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => deleteTask(taskId),
        errorIdent: 'deleteTaskError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

const changeTaskHours =
  ({ id: taskId, curDate: date, inputValue: hours }) =>
  async (dispatch, getState) => {
    dispatch(changeTaskHoursRequest());
    const { accessToken } = getState().auth.token;
    token.set(accessToken);

    await axios
      .patch(`/task/${taskId}`, { date, hours })
      .then(({ data }) => dispatch(changeTaskHoursSuccess({ taskId, ...data })))
      .catch(error =>
        dispatch(
          getError({
            error,
            requestCallback: () => changeTaskHours(taskId, { date, hours }),
            errorIdent: 'changeTaskHoursError',
          }),
        ),
      );
  };

export { getTask, addTask, deleteTask, changeTaskHours };
