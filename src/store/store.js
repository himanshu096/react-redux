import { configureStore } from '@reduxjs/toolkit';
import {todoReducer} from '../reducer/todoReducer/todoReducer';
import {statusReducer} from '../reducer/statusReducer/stausReducer';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    status: statusReducer
  },
});
