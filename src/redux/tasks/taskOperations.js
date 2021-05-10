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

// const projId2="6098375933a36061e804ee6b";
import { token } from '../auth/authOperations';
const sprintId = '60983c4033a36061e804ee70';
axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const addTask = ({ title, hoursPlanned }) => async (dispatch, getState) => {
  dispatch(addTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  await axios
    .post(`/task/${sprintId}`, { title, hoursPlanned })
    .then(({ data }) => dispatch(addTaskSuccess(data)))
    .catch(error => dispatch(addTaskError(error.message)));
};

const getTask = () => async (dispatch, getState) => {
  dispatch(getTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  await axios
    .get(`/task/${sprintId}`)
    .then(({ data }) => dispatch(getTaskSuccess(data)))
    .catch(error => dispatch(getTaskError(error.message)));
};

// const getTask = () => async dispatch => {
//   dispatch(getTaskRequest());
//   try {
//     const res = await axios.get(`/task/${sprintId}`);
//     dispatch(getTaskSuccess(res.data));
//   } catch (error) {
//     dispatch(getTaskError(error));
//   }
// };

const deleteTask = taskId => async (dispatch, getState) => {
  dispatch(deleteTaskRequest());
  const { accessToken } = getState().auth.token;
  token.set(accessToken);
  await axios
    .delete(`/task/${taskId}`)
    .then(() => dispatch(deleteTaskSuccess(taskId)))
    .catch(error => dispatch(deleteTaskError(error.message)));
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
    .catch(error => dispatch(changeTaskHoursError(error.message)));
};

export { getTask, addTask, deleteTask, changeTaskHours };
