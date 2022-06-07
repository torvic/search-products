import React from 'react';
import { render } from '@testing-library/react';
import { screen } from './test/setup';
import App from './App';

const setup = (path) => {
  window.history.pushState({}, '', path);
  render(<App />);
};

describe('Routing', () => {
  test.each`
    path    |  pageTestId
    ${'/'}  |  ${'home-page'}
  `('displays $pageTestId when path is $path', ({ path, pageTestId }) => {
    setup(path);
    const page = screen.queryByTestId(pageTestId);
    expect(page).toBeInTheDocument();
  });
});
