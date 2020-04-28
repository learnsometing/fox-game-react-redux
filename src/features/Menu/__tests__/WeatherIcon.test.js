import React from 'react';
import { create } from 'react-test-renderer';
import { WeatherIcon } from '../Icons';
describe('WeatherIcon', () => {
  it('should match the snapshot', () => {
    const weather = create(<WeatherIcon isHighlighted={false} />).toJSON();
    expect(weather).toMatchSnapshot();
  });
});
