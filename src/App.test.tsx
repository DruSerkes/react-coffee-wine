import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('snapshot / smoke test', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
