import { useEffect } from 'react';
import * as gameSlice from '../redux/gameSlice';
import { useDispatch, useSelector } from 'react-redux';

const useClock = (): void => {
  const TICK_RATE: number = 3000;

  const dispatch = useDispatch();

  const clock = useSelector(gameSlice.selectClock);
  const wakeTime = useSelector(gameSlice.selectWakeTime);
  const sleepTime = useSelector(gameSlice.selectSleepTime);
  const hungryTime = useSelector(gameSlice.selectHungryTime);
  const dieTime = useSelector(gameSlice.selectDieTime);
  const startCelebratingTime = useSelector(
    gameSlice.selectStartCelebratingTime
  );
  const endCelebratingTime = useSelector(gameSlice.selectEndCelebratingTime);
  const poopTime = useSelector(gameSlice.selectPoopTime);

  const checkTime = (): void => {
    if (clock === wakeTime) {
      dispatch(gameSlice.wake());
    } else if (clock === sleepTime) {
      dispatch(gameSlice.sleep());
    } else if (clock === hungryTime) {
      dispatch(gameSlice.getHungry());
    } else if (clock === dieTime) {
      dispatch(gameSlice.die());
    } else if (clock === startCelebratingTime) {
      dispatch(gameSlice.startCelebrating());
    } else if (clock === endCelebratingTime) {
      dispatch(gameSlice.endCelebrating());
    } else if (clock === poopTime) {
      dispatch(gameSlice.poop());
    }
  };

  function tick() {
    dispatch(gameSlice.incrementClock());
  }

  useEffect(() => {
    checkTime();

    const intervalId = setInterval(tick, TICK_RATE);

    return () => clearInterval(intervalId);
  });
};

export default useClock;
