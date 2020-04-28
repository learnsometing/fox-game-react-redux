import styled from 'styled-components';
import notSelected from './ICONS/NotSelected.png';
import highlighted from './ICONS/Hover.png';
import selected from './ICONS/Selected.png';

const Icons = styled.div`
  position: absolute;
  top: 572px;
  left: 194px;
  height: 67px;
  width: 374px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Icons;

interface IconProps {
  isHighlighted: boolean;
}

export const FishIcon = styled.div<IconProps>`
  background-image: ${(props) =>
    props.isHighlighted ? `url(${highlighted})` : `url(${notSelected})`};
  background-position: 0px;
  width: 56px;
  height: 65px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-color: transparent;
  border-color: transparent;

  &:active {
    background-image: url(${selected});
  }
`;

export const PoopIcon = styled(FishIcon)`
  background-position: -162px 0px;
`;

export const WeatherIcon = styled(FishIcon)`
  background-position: -323px 0px;
`;
