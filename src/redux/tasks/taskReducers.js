import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addTaskSuccess,
  getTaskSuccess,
  //   changeTaskHoursSuccess,
  deleteTaskSuccess,
} from './taskActions';

const TasksItems = createReducer([], {
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  [deleteTaskSuccess]: (state, { payload }) =>
    state.filter(task => task._id !== payload),
  [getTaskSuccess]: (_, { payload }) => [...payload],
});

const tasksReducer = combineReducers({
  tasks: TasksItems,
});

export default tasksReducer;
