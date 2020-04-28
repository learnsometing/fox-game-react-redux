import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../redux/gameSlice';

const ModalOuter = styled.div`
  &:empty {
    display: none;
  }
`;

const ModalInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: peru;
  color: white;
  padding: 25px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 12px;

  &:empty {
    display: none;
  }
`;

const Modal: React.FC = () => {
  const current = useSelector(selectCurrent);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    switch (current) {
      case 'DEAD':
        setModalText('The fox died :( Press the middle button to start');
        break;
      case 'INIT':
        setModalText('Press the middle button to start');
        break;
      default:
        setModalText('');
        break;
    }
  }, [current]);

  return (
    <ModalOuter>
      <ModalInner>{modalText}</ModalInner>
    </ModalOuter>
  );
};

export default Modal;
