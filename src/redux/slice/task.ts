import { createSlice } from "@reduxjs/toolkit";
import { TaskI } from "../../modules/tasks/model/task.model";


export interface TaskState {
  tasks: TaskI[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  }
})

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;