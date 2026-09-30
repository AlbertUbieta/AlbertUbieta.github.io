import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Contact from './components/Contact';

test('renders portfolio content from the profile data', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Gengar' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Filmate AI' })).toBeInTheDocument();

  const githubLink = screen.getAllByRole('link', { name: 'GitHub' })[0];
  const linkedInLink = screen.getAllByRole('link', { name: 'LinkedIn' })[0];
  expect(githubLink.querySelector('svg')).toBeInTheDocument();
  expect(linkedInLink.querySelector('svg')).toBeInTheDocument();
});

test('keeps text entered in contact fields visible', () => {
  render(<Contact content={{ title: 'Contact', description: 'Send a message' }} />);

  const nameField = screen.getByRole('textbox', { name: 'Your Name' });
  const emailField = screen.getByRole('textbox', { name: 'Email / Phone' });
  const messageField = screen.getByRole('textbox', { name: 'Message' });

  fireEvent.change(nameField, { target: { value: 'Student Name' } });
  fireEvent.change(emailField, { target: { value: 'student@example.com' } });
  fireEvent.change(messageField, { target: { value: 'Hello from my portfolio.' } });

  expect(nameField).toHaveValue('Student Name');
  expect(emailField).toHaveValue('student@example.com');
  expect(messageField).toHaveValue('Hello from my portfolio.');
});
