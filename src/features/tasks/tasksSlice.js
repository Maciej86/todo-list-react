import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
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
