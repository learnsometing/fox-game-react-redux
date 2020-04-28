import React, { useState } from 'react';
import Buttons, { LeftButton, MiddleButton, RightButton } from './Buttons';
import Icons, { FishIcon, PoopIcon, WeatherIcon } from './Icons';

const Menu: React.FC = () => {
  const ICONS: string[] = ['fish-icon', 'poop-icon', 'weather-icon'];

  const [selectedIcon, setSelectedIcon] = useState(0);

  function selectPrev(): void {
    const selected = (2 + selectedIcon) % ICONS.length;
    setSelectedIcon(selected);
  }

  function selectNext(): void {
    const selected = (1 + selectedIcon) % ICONS.length;
    setSelectedIcon(selected);
  }

  function handleUserAction(): void {
    console.log(ICONS[selectedIcon]);
  }

  return (
    <>
      <Buttons>
        <LeftButton data-testid="left-btn" onClick={selectPrev} />
        <MiddleButton data-testid="middle-btn" onClick={handleUserAction} />
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
