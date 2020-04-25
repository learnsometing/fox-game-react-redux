import { createSlice } from '@reduxjs/toolkit';

export const clockSlice = createSlice({
  name: 'clock',
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = clockSlice.actions;

export const selectClock = (state: any) => state.clock.value;

export default clockSlice.reducer;
