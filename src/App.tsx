import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import './App.css';

import Scene from './features/Scene/Scene';
import Fox from './features/Fox/Fox';
import PoopBag from './features/PoopBag/PoopBag';
import Frame from './features/Frame/Frame';
import Modal from './features/Modal/Modal';
import Menu from './features/Menu/Menu';

import * as gameSlice from './redux/gameSlice';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Inner = styled.div`
  position: relative;
`;

function App() {
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

  useEffect(() => {
    function tick() {
      dispatch(gameSlice.incrementClock());
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
    }

    const intervalId = setInterval(tick, TICK_RATE);

    return () => clearInterval(intervalId);
  });

  return (
    <Container>
      <Inner>
        <Scene />
        <Fox />
        <PoopBag />
        <Frame />
        <Modal />
        <Menu />
      </Inner>
    </Container>
  );
}

export default App;
