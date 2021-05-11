export const getTasksSelector = state => state.tasks.tasks;

export const hoursPlannedSelector = state =>
  state.tasks.tasks.map(task => task.hoursPlanned);
