import React from 'react';
import styled from 'styled-components';

import './App.css';

import Scene from './features/Scene/Scene';
import Fox from './features/Fox/Fox';
import PoopBag from './features/PoopBag/PoopBag';
import Frame from './features/Frame/Frame';
import Modal from './features/Modal/Modal';
import Menu from './features/Menu/Menu';

import useClock from './hooks/useClock';

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
  useClock();
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
