import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks.splice(index, 1);
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleHideAllDone: ({ tasks }) => {
      tasks.forEach((tasks) => {
        tasks.done = true;
      });
    },
    fetchExampleTasks: () => {
      console.log("Działa");
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleHideDone,
  toggleTaskDone,
  toggleHideAllDone,
  fetchExampleTasks,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) =>
  selectTasksState(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;
