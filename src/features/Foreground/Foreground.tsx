import styled from 'styled-components';
import rain from './rain.png';

interface Props {
  isRaining: boolean;
}

const Foreground = styled.div<Props>`
  display: ${({ isRaining }) => (isRaining ? 'block' : 'none')};
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

export default Foreground;
