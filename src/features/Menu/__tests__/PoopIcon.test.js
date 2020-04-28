import React from 'react';
import { create } from 'react-test-renderer';
import { PoopIcon } from '../Icons';

describe('PoopIcon', () => {
  it('should match the snapshot', () => {
    const poop = create(<PoopIcon isHighlighted={false} />).toJSON();
    expect(poop).toMatchSnapshot();
  });
});
