import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    current: 'INIT',
    clock: 1,
    wakeTime: -1,
  },
  reducers: {
    incrementClock: (state) => {
      state.clock += 1;
    },
    startGame: (state) => {
      console.log('hatching');
      state.current = 'HATCHING';
      state.wakeTime = state.clock + 3;
    },
    wake: (state) => {
      console.log('hatched');
      state.current = 'IDLING';
      state.wakeTime = -1;
    },
    changeWeather() {
      console.log('changeWeather');
    },
    cleanUpPoop() {
      console.log('cleanUpPoop');
    },
    feed() {
      console.log('feed');
    },
  },
});

export const {
  incrementClock,
  startGame,
  wake,
  changeWeather,
  cleanUpPoop,
  feed,
} = gameSlice.actions;

export const selectCurrent = (state: any) => state.current;
export const selectClock = (state: any) => state.clock;
export const selectWakeTime = (state: any) => state.wakeTime;

export default gameSlice.reducer;
