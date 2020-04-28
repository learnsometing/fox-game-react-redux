import React from 'react';
import Menu, { Icons } from '../Menu';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Icons', () => {
  it('should add the highlighted class to the element', () => {
    const { queryByTestId } = render(<Icons selectedIcon={0} />);
    const fish = queryByTestId('fish-icon');
    expect(fish).toHaveClass('highlighted');
  });
});

describe('Menu', () => {
  it('clicking the left button should select the icon to the left', () => {
    const { queryByTestId } = render(<Menu />);
    const leftBtn = queryByTestId('left-btn');
    let weather = queryByTestId('weather-icon');
    expect(weather).not.toHaveClass('highlighted');
    fireEvent.click(leftBtn);
    weather = queryByTestId('weather-icon');
    expect(weather).toHaveClass('highlighted');
  });

  it('clicking the right button should select the icon to the right', () => {
    const { queryByTestId } = render(<Menu />);
    const rightBtn = queryByTestId('right-btn');
    let poop = queryByTestId('poop-icon');
    expect(poop).not.toHaveClass('highlighted');
    fireEvent.click(rightBtn);
    poop = queryByTestId('poop-icon');
    expect(poop).toHaveClass('highlighted');
  });

  it.todo('clicking the middle button should perform the selected action');
});
