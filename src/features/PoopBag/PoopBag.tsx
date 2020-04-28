import React from 'react';
import styled from 'styled-components';
import poopBag from './PoopBag.png';
import { useSelector } from 'react-redux';
import { selectTogglePoopBag } from '../../redux/gameSlice';

interface Props {
  togglePoopBag: boolean;
}

const PoopBag = styled.div<Props>`
  display: ${(props) => (props.togglePoopBag ? 'block' : 'none')};
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

const ConnectedPoopBag: React.FC = () => {
  const togglePoopBag = useSelector(selectTogglePoopBag);

  return <PoopBag togglePoopBag={togglePoopBag} />;
};

export default ConnectedPoopBag;
