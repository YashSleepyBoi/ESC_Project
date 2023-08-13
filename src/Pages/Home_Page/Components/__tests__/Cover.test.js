import React from 'react';
import { render } from '@testing-library/react';
import Cover from '../Cover';

describe('Cover Component', () => {
  it('renders without errors', () => {
    const { container } = render(<Cover />);
    expect(container.querySelector('.main-cover')).toBeInTheDocument();
  });

  it('renders an image with the correct source', () => {
    const { container } = render(<Cover />);
    const imageElement = container.querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/src/components/Assets/mbs.jpeg');
  });
});
