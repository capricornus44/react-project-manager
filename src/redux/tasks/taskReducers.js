import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addTaskSuccess,
  getTaskSuccess,
  changeTaskHoursSuccess,
  deleteTaskSuccess,
  getTaskRequest,
} from './taskActions';

const TasksItems = createReducer([], {
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  [deleteTaskSuccess]: (state, { payload }) =>
    state.filter(task => task._id !== payload),
  [getTaskSuccess]: (_, { payload }) => [...payload],
  [getTaskRequest]: (state, { payload }) => [],
  [changeTaskHoursSuccess]: (state, { payload }) =>
    state.map(task => {
      if (task._id !== payload.taskId) return task;
      const newTask = { ...task };
      newTask.hoursWasted = payload.newWastedHours;
      newTask.hoursWastedPerDay = newTask.hoursWastedPerDay.map(elem => {
        if (elem.currentDay !== payload.day.currentDay) return elem;
        return { ...elem, singleHoursWasted: payload.day.singleHoursWasted };
      });
      return newTask;
    }),
});

// {day :
// {currentDay:"2021-05-12"
// singleHoursWasted:5}
// newWastedHours:5
// taskId:id}

const tasksReducer = combineReducers({
  tasks: TasksItems,
});

export default tasksReducer;
