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
} from './contactsActions';

const getTask = sprintId => async dispatch => {
  dispatch(getTaskRequest());
  await axios
    .get(`/task/${sprintId}`)
    .then(({ data }) => dispatch(getTaskSuccess(data)))
    .catch(error => dispatch(getTaskError(error.message)));
};

const addTask = (sprintId, { title, hoursPlanned }) => async dispatch => {
  dispatch(addTaskRequest());
  await axios
    .post(`/task/${sprintId}`, { title, hoursPlanned })
    .then(({ data }) => dispatch(addTaskSuccess(data)))
    .catch(error => dispatch(addTaskError(error.message)));
};

const deleteTask = taskId => async dispatch => {
  dispatch(deleteTaskRequest());
  await axios
    .delete(`/task/${taskId}`)
    .then(() => dispatch(deleteTaskSuccess(taskId)))
    .catch(error => dispatch(deleteTaskError(error.message)));
};

const changeTaskHours = (taskId, { date, hours }) => async dispatch => {
  dispatch(changeTaskHoursRequest());
  await axios
    .patch(`/task/${taskId}`, { date, hours })
    .then(({ data }) => dispatch(changeTaskHoursSuccess(data)))
    .catch(error => dispatch(changeTaskHoursError(error.message)));
};

export { getTask, addTask, deleteTask, changeTaskHours };
