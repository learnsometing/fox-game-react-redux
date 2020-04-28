import { createSlice } from '@reduxjs/toolkit';

const RAIN_CHANCE = 0.2;

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    current: 'INIT',
    clock: 1,
    wakeTime: -1,
    scene: 'SUNNY',
  },
  reducers: {
    incrementClock: (state) => {
      state.clock += 1;
    },
    startGame: (state) => {
      state.current = 'HATCHING';
      state.wakeTime = state.clock + 3;
      state.scene = 'DAY';
    },
    wake: (state) => {
      state.current = 'IDLING';
      state.wakeTime = -1;
      state.scene = Math.random() > RAIN_CHANCE ? 'SUNNY' : 'RAINY';
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
export const selectScene = (state: any) => state.scene;

export default gameSlice.reducer;
