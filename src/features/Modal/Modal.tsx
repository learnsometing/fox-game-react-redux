import React from 'react';
import styled from 'styled-components';

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

const Modal: React.FC = () => (
  <ModalOuter>
    <ModalInner>Press the middle button to start</ModalInner>
  </ModalOuter>
);

export default Modal;
