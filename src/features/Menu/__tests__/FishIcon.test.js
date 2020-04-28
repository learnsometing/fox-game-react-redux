import React from 'react';
import { FishIcon } from '../Icons';
import highlighted from '../ICONS/Hover.png';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

describe('FishIcon', () => {
  it('should match the snapshot', () => {
    const fish = create(<FishIcon isHighlighted={false} />).toJSON();
    expect(fish).toMatchSnapshot();
  });

  it('should change the background image when isHighlighted', () => {
    const fish = create(<FishIcon isHighlighted={true} />).toJSON();
    expect(fish).toHaveStyleRule('background-image', `url(${highlighted})`);
  });
});
