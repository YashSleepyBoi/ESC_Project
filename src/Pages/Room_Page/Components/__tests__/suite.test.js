import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Suite from '../suite';

describe('Suite Component', () => {
  test('renders Suite component', () => {
    render(
      <ThemeProvider theme={createTheme()}>
        <Suite isSmall={false} />
      </ThemeProvider>
    );

    expect(screen.getByText('Luxury Suites')).toBeInTheDocument();
    expect(screen.getByText('Executive Lounge')).toBeInTheDocument();
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'https://images.unsplash.com/photo-1537823286324-7d070255022e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
    expect(images[1]).toHaveAttribute('src', 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80');
  });
});
