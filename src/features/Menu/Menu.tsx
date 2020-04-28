import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Buttons, { LeftButton, MiddleButton, RightButton } from './Buttons';
import Icons, { FishIcon, PoopIcon, WeatherIcon } from './Icons';

// gameSlice actions
import {
  startGame,
  changeWeather,
  cleanUpPoop,
  feed,
} from '../../redux/gameSlice';

// gameSlice selectors
import { selectCurrent } from '../../redux/gameSlice';

const Menu: React.FC = () => {
  const ICONS: string[] = ['fish-icon', 'poop-icon', 'weather-icon'];
  const [selectedIcon, setSelectedIcon] = useState(0);
  const dispatch = useDispatch();
  const current = useSelector(selectCurrent);

  function selectPrev(): void {
    const selected = (2 + selectedIcon) % ICONS.length;
    setSelectedIcon(selected);
  }

  function selectNext(): void {
    const selected = (1 + selectedIcon) % ICONS.length;
    setSelectedIcon(selected);
  }

  function handleUserAction(icon: string): void {
    // can't do actions while in these states
    if (['SLEEP', 'FEEDING', 'CELEBRATING', 'HATCHING'].includes(current)) {
      return;
    }

    if (current === 'INIT' || current === 'DEAD') {
      dispatch(startGame());
      return;
    }

    //execute the currently selected action
    switch (icon) {
      case 'weather-icon':
        dispatch(changeWeather());
        break;
      case 'poop-icon':
        dispatch(cleanUpPoop());
        break;
      case 'fish-icon':
        if (current !== 'HUNGRY') break;
        dispatch(feed());
        break;
    }
  }

  return (
    <>
      <Buttons>
        <LeftButton data-testid="left-btn" onClick={selectPrev} />
        <MiddleButton
          data-testid="middle-btn"
          onClick={() => handleUserAction(ICONS[selectedIcon])}
        />
        <RightButton data-testid="right-btn" onClick={selectNext} />
      </Buttons>
      <Icons>
        <FishIcon isHighlighted={selectedIcon === 0} data-testid="fish-icon" />
        <PoopIcon isHighlighted={selectedIcon === 1} data-testid="poop-icon" />
        <WeatherIcon
          isHighlighted={selectedIcon === 2}
          data-testid="weather-icon"
        />
      </Icons>
    </>
  );
};

export default Menu;
