/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RootWrapper = ({ children }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={children} />
    </Routes>
  </BrowserRouter>
);

const customRender = (ui, options) => render(ui, { wrapper: RootWrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
