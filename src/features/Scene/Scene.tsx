import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectScene } from '../../redux/gameSlice';
import day from './DAY.png';
import night from './NIGHT.png';
import dead from './DEAD.png';
import rainy from './RAINY.png';
import rain from './rain.png';

export const Sunny = styled.div`
  width: 628px;
  height: 577px;
  position: absolute;
  top: 62px;
  left: 67px;
  background-image: url(${day});
`;

export const Night = styled(Sunny)`
  background-image: url(${night});
  width: 716px;
  top: 62px;
  left: -19px;
`;

export const Dead = styled(Sunny)`
  background-image: url(${dead});
`;

export const Rainy = styled(Sunny)`
  background-image: url(${rainy});
`;

const Rain = styled.div`
  background-image: url(${rain});
  animation: raining 0.5s steps(3) infinite;
  width: 606px;
  height: 516px;
  overflow: hidden;
  position: absolute;
  top: 56px;
  left: 60px;

  @keyframes raining {
    to {
      background-position: -1818px;
    }
  }
`;

const Scene: React.FC = () => {
  const current = useSelector(selectScene);
  const [scene, setScene] = useState(<Sunny />);
  useEffect(() => {
    switch (current) {
      case 2:
        setScene(<Night />);
        break;
      case 1:
        setScene(
          <>
            <Rainy />
            <Rain />
          </>
        );
        break;
      case 3:
        setScene(<Dead />);
        break;
      default:
        setScene(<Sunny />);
        break;
    }
  }, [current]);

  return scene;
};

export default Scene;
