import { createSlice } from '@reduxjs/toolkit';

const RAIN_CHANCE = 1;
const DAY_LENGTH = 60;
const NIGHT_LENGTH = 3;

const getNextHungerTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 5 + clock;
const getNextDieTime = (clock: number) =>
  Math.floor(Math.random() * 2) + 3 + clock;
const getNextPoopTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 4 + clock;

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    current: 'INIT',
    scene: 'SUNNY',
    clock: 1,
    wakeTime: -1,
    sleepTime: -1,
    hungryTime: -1,
    dieTime: -1,
    poopTime: -1,
    timeToStartCelebrating: -1,
    timeToEndCelebrating: -1,
    togglePoopBag: false,
  },
  reducers: {
    incrementClock: (state) => {
      state.clock += 1;
    },
    startGame: (state) => {
      state.current = 'HATCHING';
      state.wakeTime = state.clock + 3;
      state.scene = 'SUNNY';
    },
    wake: (state) => {
      state.current = 'IDLING';
      state.wakeTime = -1;
      state.scene = Math.random() > RAIN_CHANCE ? 'SUNNY' : 'RAINY';
      state.sleepTime = state.clock + DAY_LENGTH;
      state.hungryTime = getNextHungerTime(state.clock);
    },
    sleep: (state) => {
      state.current = 'SLEEPING';
      state.scene = 'NIGHT';
      state.wakeTime = state.clock + NIGHT_LENGTH;
    },
    changeWeather() {
      console.log('changeWeather');
    },
    cleanUpPoop: (state) => {
      state.dieTime = -1;
      state.hungryTime = getNextHungerTime(state.clock);
      state.togglePoopBag = true;
    },
    feed: (state) => {
      state.current = 'FEEDING';
      state.dieTime = -1;
      state.poopTime = getNextPoopTime(state.clock);
      state.timeToStartCelebrating = state.clock + 2;
    },
    getHungry: (state) => {
      state.current = 'HUNGRY';
      state.dieTime = getNextDieTime(state.clock);
      state.hungryTime = -1;
    },
    // die: (state) => {
    //   console.log('ded');
    // },
    startCelebrating: (state) => {
      state.current = 'CELEBRATING';
      state.timeToStartCelebrating = -1;
      state.timeToEndCelebrating = state.clock + 2;
    },
    endCelebrating: (state) => {
      state.current = 'IDLING';
      state.timeToEndCelebrating = -1;
      state.togglePoopBag = false;
    },
    poop: (state) => {
      state.current = 'POOPING';
      state.poopTime = -1;
      state.dieTime = getNextDieTime(state.clock);
    },
  },
});

export const {
  incrementClock,
  startGame,
  wake,
  sleep,
  changeWeather,
  cleanUpPoop,
  feed,
  getHungry,
  // die,
  startCelebrating,
  endCelebrating,
  poop,
} = gameSlice.actions;

export const selectCurrent = (state: any) => state.current;
export const selectClock = (state: any) => state.clock;
export const selectWakeTime = (state: any) => state.wakeTime;
export const selectSleepTime = (state: any) => state.sleepTime;
export const selectScene = (state: any) => state.scene;
export const selectHungryTime = (state: any) => state.hungryTime;
export const selectDieTime = (state: any) => state.dieTime;
export const selectStartCelebratingTime = (state: any) =>
  state.timeToStartCelebrating;
export const selectEndCelebratingTime = (state: any) =>
  state.timeToEndCelebrating;
export const selectPoopTime = (state: any) => state.poopTime;
export const selectTogglePoopBag = (state: any) => state.togglePoopBag;
export default gameSlice.reducer;
