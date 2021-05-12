import axios from 'axios';
import {
  getTaskRequest,
  getTaskSuccess,
  getTaskError,
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  changeTaskHoursRequest,
  changeTaskHoursSuccess,
  changeTaskHoursError,
} from './taskActions';

// const projId="6098fb0c33a36061e804eee2";
import { token } from '../auth/authOperations';
import { getError } from '../error/errorHandler';
// const sprintId = '6098fba433a36061e804eee5';
axios.defaults.baseURL = 'https://sbc-backend.goit.global/';

const addTask = ({ sprintId, title, hoursPlanned }) => async (
  dispatch,
  getState,
) => {
  dispatch(addTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);

  try {
    const {
      data: { id, _id, ...rest },
    } = await axios.post(`/task/${sprintId}`, { title, hoursPlanned });
    dispatch(addTaskSuccess({ _id: id || _id, ...rest }));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => addTask({ sprintId, title, hoursPlanned }),
        errorIdent: 'addTaskError',
      }),
    );
  }
};

const getTask = sprintId => async (dispatch, getState) => {
  dispatch(getTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  try {
    const res = await axios.get(`/task/${sprintId}`);
    dispatch(getTaskSuccess(res.data));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => getTask(sprintId),
        errorIdent: 'getTaskError',
      }),
    );
  }
};

const deleteTask = taskId => async (dispatch, getState) => {
  dispatch(deleteTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);

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
  }
};

const changeTaskHours = (taskId, { date, hours }) => async (
  dispatch,
  getState,
) => {
  dispatch(changeTaskHoursRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  await axios
    .patch(`/task/${taskId}`, { date, hours })
    .then(({ data }) => dispatch(changeTaskHoursSuccess(data)))
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
