export const getTasksSelector = state => state.tasks.tasksList;

export const hoursPlannedSelector = state =>
  state.tasks.tasks.map(task => task.hoursPlanned);
