import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import './sprites.css';
import Game from './features/Game/Game';
import Fox from './features/Fox/Fox';
import PoopBag from './features/PoopBag/PoopBag';
import Foreground from './features/Foreground/Foreground';
import Frame from './features/Frame/Frame';
import Modal from './features/Modal/Modal';
import Menu from './features/Menu/Menu';
import { increment } from './features/Clock/clockSlice';

function App() {
  const TICK_RATE: number = 3000;
  const dispatch = useDispatch();

  function tick(): void {
    dispatch(increment());
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
        <Menu />
      </div>
    </div>
  );
}

export default App;
