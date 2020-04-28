import styled from 'styled-components';
import poopBag from './PoopBag.png';

interface Props {
  isHidden: boolean;
}

const PoopBag = styled.div<Props>`
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
  position: absolute;
  top: 300px;
  left: 160px;
  background-image: url(${poopBag});
  animation: swing-poop-bag 1s steps(3) infinite alternate;
  width: 99px;
  height: 104px;
  overflow: hidden;

  @keyframes swing-poop-bag {
    to {
      background-position: -297px;
    }
  }
`;

export default PoopBag;
