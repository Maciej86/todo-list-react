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
    removeTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
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
  },
});

export const {
  addTask,
  removeTask,
  toggleHideDone,
  toggleTaskDone,
  toggleHideAllDone,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
