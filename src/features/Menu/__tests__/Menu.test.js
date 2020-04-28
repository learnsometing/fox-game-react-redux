import React from 'react';
import Menu from '../Menu';
import notSelected from '../ICONS/NotSelected.png';
import highlighted from '../ICONS/Hover.png';
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

describe('Menu', () => {
  it('should match the snapshot', () => {
    const menu = create(<Menu />).toJSON();
    expect(menu).toMatchSnapshot();
  });

  it('clicking the left button should select the icon to the left', () => {
    const { queryByTestId } = render(<Menu />);
    const leftBtn = queryByTestId('left-btn');
    let weather = queryByTestId('weather-icon');
    expect(weather).toHaveStyleRule('background-image', `url(${notSelected})`);
    fireEvent.click(leftBtn);
    weather = queryByTestId('weather-icon');
    expect(weather).toHaveStyleRule('background-image', `url(${highlighted})`);
  });

  it('clicking the right button should select the icon to the right', () => {
    const { queryByTestId } = render(<Menu />);
    const rightBtn = queryByTestId('right-btn');
    let poop = queryByTestId('poop-icon');
    expect(poop).toHaveStyleRule('background-image', `url(${notSelected})`);
    fireEvent.click(rightBtn);
    poop = queryByTestId('poop-icon');
    expect(poop).toHaveStyleRule('background-image', `url(${highlighted})`);
  });

  it.todo('clicking the middle button should perform the selected action');
});
