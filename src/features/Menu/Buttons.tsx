import styled from 'styled-components';
import notSelected from './BUTTONS/NotSelected.png';
import hover from './BUTTONS/Hover.png';
import selected from './BUTTONS/Selected.png';

const Buttons = styled.div`
  position: absolute;
  top: 674px;
  left: 266px;
  height: 71px;
  width: 228px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Buttons;

export const LeftButton = styled.div`
  background-image: url(${notSelected});
  background-position: 0px;
  width: 62px;
  height: 65px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background-image: url(${hover});
  }

  &:active {
    background-image: url(${selected});
  }
`;

export const MiddleButton = styled(LeftButton)`
  background-position: -84px 0px;
`;

export const RightButton = styled(LeftButton)`
  background-position: -167px 0px;
`;
