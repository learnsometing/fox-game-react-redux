import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../redux/gameSlice';

export default configureStore({
  reducer: gameReducer,
});
