import {
  addProjectError,
  getProjectError,
  deleteProjectError,
  changeTitleProjectError,
  addMemberProjectError,
} from '../projects/projectActions';

import {
  addSprintError,
  getSprintError,
  changeTitleSprintError,
  deleteSprintError,
} from '../sprints/sprintActions';

import {
  getTaskError,
  addTaskError,
  deleteTaskError,
  changeTaskHoursError,
} from '../tasks/taskActions';

import { signupError, signinError, logoutError } from '../auth/authActions';

import { refreshOperation } from '../auth/authOperations';

export const getError = errorData => async dispatch => {
  if (errorData.error.status === 401) {
    await dispatch(refreshOperation(errorData.requestCallback));
    return;
  }

  switch (errorData.errorIdent) {
    case 'signupError':
      dispatch(signupError(errorData.error.message));
      break;

    case 'signinError':
      dispatch(signinError(errorData.error.message));
      break;

    case 'logoutError':
      dispatch(logoutError(errorData.error.message));
      break;

    case 'getProjectError':
      dispatch(getProjectError(errorData.error.message));
      break;

    case 'addProjectError':
      dispatch(addProjectError(errorData.error.message));
      break;

    case 'deleteProjectError':
      dispatch(deleteProjectError(errorData.error.message));
      break;

    case 'changeTitleProjectError':
      dispatch(changeTitleProjectError(errorData.error.message));
      break;

    case 'addMemberProjectError':
      dispatch(addMemberProjectError(errorData.error.message));
      break;

    case 'getSprintError':
      dispatch(getSprintError(errorData.error.message));
      break;

    case 'addSprintError':
      dispatch(addSprintError(errorData.error.message));
      break;

    case 'deleteSprintError':
      dispatch(deleteSprintError(errorData.error.message));
      break;

    case 'changeTitleSprintError':
      dispatch(changeTitleSprintError(errorData.error.message));
      break;

    case 'addTaskError':
      dispatch(addTaskError(errorData.error.message));
      break;

    case 'getTaskError':
      dispatch(getTaskError(errorData.error.message));
      break;

    case 'deleteTaskError':
      dispatch(deleteTaskError(errorData.error.message));
      break;

    case 'changeTaskHoursError':
      dispatch(changeTaskHoursError(errorData.error.message));
      break;

    default:
      break;
  }
};
