import { render } from '@testing-library/react';
import React from 'react';

import HomePage from '../pages/index'; // Replace with your actual file path

describe('HomePage', () => {
  test('renders welcome text', () => {
    const { getByText } = render(<HomePage />);
    const welcomeText = getByText(/Welcome To/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test('renders Tryyon text', () => {
    const { getByText } = render(<HomePage />);
    const tryyonText = getByText(/Tryyon/i);
    expect(tryyonText).toBeInTheDocument();
  });

  test('renders lorem ipsum text', () => {
    const { getByText } = render(<HomePage />);
    const loremIpsumText = getByText(/Lorem ipsum dolor sit amet/i);
    expect(loremIpsumText).toBeInTheDocument();
  });

  // Add more tests for image, styles, etc. as needed
});
