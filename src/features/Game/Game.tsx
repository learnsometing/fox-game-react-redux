import styled from 'styled-components';
import day from './DAY.png';
import night from './NIGHT.png';
import dead from './DEAD.png';
import rainy from './RAINY.png';

const Game = styled.div`
  width: 628px;
  height: 577px;
  position: absolute;
  top: 62px;
  left: 67px;
  background-image: url(${day});
`;

export default Game;

export const Night = styled(Game)`
  background-image: url(${night});
  width: 716px;
  top: 62px;
  left: -19px;
`;

export const Dead = styled(Game)`
  background-image: url(${dead});
`;

export const Rainy = styled(Game)`
  background-image: url(${rainy});
`;
