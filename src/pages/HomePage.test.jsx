import React from 'react';
import { render } from '../test/setup';
import HomePage from './HomePage';

describe('Alert component', () => {
  it('should be render', () => {
    render(<HomePage />);
  });
});
