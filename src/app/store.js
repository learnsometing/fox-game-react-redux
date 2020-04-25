import { configureStore } from '@reduxjs/toolkit';
import clockReducer from '../features/Clock/clockSlice';

export default configureStore({
  reducer: {
    clock: clockReducer,
  },
});
