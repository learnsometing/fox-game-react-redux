import React, { useState } from 'react';

const ICONS: string[] = ['fish-icon', 'poop-icon', 'weather-icon'];

interface IconProps {
  selectedIcon: number;
}

export const Icons: React.FC<IconProps> = ({ selectedIcon }) => {
  const icons = ICONS.map((className, idx) => {
    const ID = className;
    if (idx === selectedIcon) className += ' highlighted';
    return (
      <div
        className={`icon ${className}`}
        key={className}
        data-testid={ID}
      ></div>
    );
  });

  return <>{icons}</>;
};

const Menu: React.FC = () => {
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
      <div className="buttons">
        <div
          className="btn left-btn"
          data-testid="left-btn"
          onClick={selectPrev}
        ></div>
        <div
          className="btn middle-btn"
          data-testid="middle-btn"
          onClick={handleUserAction}
        ></div>
        <div
          className="btn right-btn"
          data-testid="right-btn"
          onClick={selectNext}
        ></div>
      </div>
      <div className="icons">
        <Icons selectedIcon={selectedIcon} />
      </div>
    </>
  );
};

export default Menu;
