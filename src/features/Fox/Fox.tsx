import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import egg from './pet/Egg.png';
import idling from './pet/AtRest.png';
import sleeping from './pet/Sleeping.png';
import wet from './pet/Rain.png';
import hungry from './pet/Hungry.png';
import eating from './pet/Eating.png';
import celebrating from './pet/Yay.png';
import pooping from './pet/Pooping.png';
import dead from './pet/TombStone.png';
import { selectCurrent, selectScene } from '../../redux/gameSlice';

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

const WetFox = styled(InitFox)`
  display: block;
  top: 362px;
  background-image: url(${wet});
  background-repeat: no-repeat;
  width: 134px;
  height: 153px;
  animation: sit-in-the-rain 2s steps(5) infinite alternate;

  @keyframes sit-in-the-rain {
    to {
      background-position: -670px;
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

const HungryFox = styled(InitFox)`
  display: block;
  /* top: 362px; */
  background-image: url(${hungry});
  background-repeat: no-repeat;
  width: 130px;
  height: 160px;
  top: 339px;
  animation: hungry 1s steps(2) infinite;

  @keyframes hungry {
    to {
      background-position: -260px;
    }
  }
`;

const FeedingFox = styled(InitFox)`
  display: block;
  /* top: 362px; */
  background-image: url(${eating});
  background-position: -1865.7px;
  background-repeat: no-repeat;
  width: 207.3px;
  height: 148px;
  top: 358px;
  left: 81px;
  animation: eating 3s steps(10);

  @keyframes eating {
    from {
      background-position: 0;
    }
    to {
      background-position: -2073px;
    }
  }
`;

const CelebratingFox = styled(InitFox)`
  display: block;
  top: 290px;
  left: 290px;
  background-image: url(${celebrating});
  background-repeat: no-repeat;
  width: 130.8px;
  height: 213px;
  animation: celebrate 2s steps(5) infinite;

  @keyframes celebrate {
    to {
      background-position: -654px;
    }
  }
`;

const PoopingFox = styled(InitFox)`
  display: block;
  top: 319px;
  left: 159px;
  background-image: url(${pooping});
  background-position: -1836px;
  background-repeat: no-repeat;
  width: 204px;
  height: 202px;
  animation: pooping 5s steps(10);

  @keyframes pooping {
    from {
      background-position: 0;
    }
    to {
      background-position: -2040px;
    }
  }
`;

const DeadFox = styled(InitFox)`
  top: 380px;
  left: 243px;
  background-image: url(${dead});
  background-repeat: no-repeat;
  width: 118px;
  height: 119px;
  animation: being-dead 1s steps(3) infinite;
  @keyframes being-dead {
    to {
      background-position: -354px;
    }
  }
`;

const Fox: React.FC = () => {
  const current = useSelector(selectCurrent);
  const scene = useSelector(selectScene);
  const [fox, setFox] = useState(<></>);

  useEffect(() => {
    switch (current) {
      case 'INIT':
        setFox(<InitFox />);
        break;
      case 'HATCHING':
        setFox(<HatchingFox />);
        break;
      case 'DEAD':
        setFox(<DeadFox />);
        break;
      case 'SLEEPING':
        setFox(<SleepingFox />);
        break;
      case 'HUNGRY':
        setFox(<HungryFox />);
        break;
      case 'FEEDING':
        setFox(<FeedingFox />);
        break;
      case 'CELEBRATING':
        setFox(<CelebratingFox />);
        break;
      case 'POOPING':
        setFox(<PoopingFox />);
        break;
      default:
        if (scene === 1) {
          setFox(<WetFox />);
        } else {
          setFox(<IdlingFox />);
        }
        break;
    }
  }, [current, scene]);

  return fox;
};

export default Fox;
