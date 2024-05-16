import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageSlice';
import imageFileSlice from './imageFileSlice';

export const store = configureStore({
  reducer: {
    ref: imageReducer,
    imageFile: imageFileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
