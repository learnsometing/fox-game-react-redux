import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './sprites.css';
import Game from './features/Game/Game';
import Fox from './features/Fox/Fox';
import PoopBag from './features/PoopBag/PoopBag';
import Foreground from './features/Foreground/Foreground';
import Frame from './features/Frame/Frame';
import Modal from './features/Modal/Modal';
import Buttons from './features/Buttons/Buttons';
import Icons from './features/Icons/Icons';
import { increment, selectClock } from './features/Clock/clockSlice';

function App() {
  const TICK_RATE: number = 3000;
  const clock = useSelector(selectClock);
  const dispatch = useDispatch();

  function tick(): void {
    dispatch(increment());
    console.log(clock);
  }

  useEffect(() => {
    const intervalId = setInterval(tick, TICK_RATE);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="container">
      <div className="inner">
        <Game />
        <Fox />
        <PoopBag />
        <Foreground />
        <Frame />
        <Modal />
        <Buttons />
        <Icons />
      </div>
    </div>
  );
}

export default App;
