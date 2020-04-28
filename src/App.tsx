import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import './App.css';
import './sprites.css';

import Scene from './features/Scene/Scene';
import Fox from './features/Fox/Fox';
import PoopBag from './features/PoopBag/PoopBag';
import Frame from './features/Frame/Frame';
import Modal from './features/Modal/Modal';
import Menu from './features/Menu/Menu';

import {
  incrementClock,
  selectClock,
  wake,
  selectWakeTime,
} from './redux/gameSlice';

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
  const clock = useSelector(selectClock);
  const wakeTime = useSelector(selectWakeTime);

  useEffect(() => {
    function tick() {
      dispatch(incrementClock());
      if (clock === wakeTime) {
        dispatch(wake());
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
        <PoopBag isHidden={true} />
        <Frame />
        <Modal />
        <Menu />
      </Inner>
    </Container>
  );
}

export default App;
