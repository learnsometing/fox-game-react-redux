import React from 'react';
import Menu from '../Menu';

import store from '../../../app/store';
import { Provider } from 'react-redux';

import notSelected from '../ICONS/NotSelected.png';
import highlighted from '../ICONS/Hover.png';
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

describe('Menu', () => {
  it('should match the snapshot', () => {
    const menu = create(
      <Provider store={store}>
        <Menu />
      </Provider>
    ).toJSON();
    expect(menu).toMatchSnapshot();
  });

  it('clicking the left button should select the icon to the left', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );
    const leftBtn = queryByTestId('left-btn');
    let weather = queryByTestId('weather-icon');
    expect(weather).toHaveStyleRule('background-image', `url(${notSelected})`);
    fireEvent.click(leftBtn);
    weather = queryByTestId('weather-icon');
    expect(weather).toHaveStyleRule('background-image', `url(${highlighted})`);
  });

  it('clicking the right button should select the icon to the right', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );
    const rightBtn = queryByTestId('right-btn');
    let poop = queryByTestId('poop-icon');
    expect(poop).toHaveStyleRule('background-image', `url(${notSelected})`);
    fireEvent.click(rightBtn);
    poop = queryByTestId('poop-icon');
    expect(poop).toHaveStyleRule('background-image', `url(${highlighted})`);
  });

  it.todo('clicking the middle button should perform the selected action');
});
