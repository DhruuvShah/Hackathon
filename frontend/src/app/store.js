import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from '../features/workout/workoutSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    workout: workoutReducer,
  },
});