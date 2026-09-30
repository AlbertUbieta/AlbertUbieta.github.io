import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content from the profile data', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Nico Izquierdo' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Filmate AI' })).toBeInTheDocument();
  expect(screen.getByText('Technology Consultant')).toBeInTheDocument();
});
