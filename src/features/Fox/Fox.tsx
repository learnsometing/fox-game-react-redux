import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import egg from './pet/Egg.png';
import idling from './pet/AtRest.png';
import sleeping from './pet/Sleeping.png';

import { selectCurrent } from '../../redux/gameSlice';

const InitFox = styled.div`
  display: none;
  position: absolute;
  top: 336px;
  left: 285px;
  overflow: hidden;
`;

const HatchingFox = styled(InitFox)`
  display: block;
  top: 289px;
  left: 248px;
  background-image: url(${egg});
  background-repeat: no-repeat;
  background-position: -1050px;
  width: 175px;
  height: 217px;
  animation: hatching 4s steps(7);

  @keyframes hatching {
    from {
      background-position: 0;
    }
    to {
      background-position: -1225px;
    }
  }
`;

const IdlingFox = styled(InitFox)`
  display: block;
  background-image: url(${idling});
  background-repeat: no-repeat;
  width: 117px;
  height: 165px;
  animation: idle 2s steps(3) infinite;

  @keyframes idle {
    to {
      background-position: -372px;
    }
  }
`;

const SleepingFox = styled(InitFox)`
  display: block;
  top: 351px;
  left: 445px;
  background-image: url(${sleeping});
  background-repeat: no-repeat;
  width: 250px;
  height: 155px;
  animation: sleeping 4s steps(4) infinite;
  @keyframes sleeping {
    to {
      background-position: -1000px;
    }
  }
`;

const Fox: React.FC = () => {
  const current = useSelector(selectCurrent);
  const [fox, setFox] = useState(<InitFox />);

  useEffect(() => {
    switch (current) {
      case 'HATCHING':
        setFox(<HatchingFox />);
        break;
      case 'IDLING':
        setFox(<IdlingFox />);
        break;
      case 'SLEEPING':
        setFox(<SleepingFox />);
        break;
    }
  }, [current]);

  return fox;
};

export default Fox;
