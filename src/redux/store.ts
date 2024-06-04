import {configureStore} from '@reduxjs/toolkit';
import taskReducer from "./slice/task"

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
