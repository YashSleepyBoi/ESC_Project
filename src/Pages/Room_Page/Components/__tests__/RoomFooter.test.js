import { render, screen } from '@testing-library/react';
import Footer from '../RoomFooter';
import { footerData } from '../../Content';
import '@testing-library/jest-dom'

jest.mock('../../Content', () => ({
  footerData: ['Data 1', 'Data 2', 'Data 3']
}));

describe('Footer component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
  });

  test('contains the expected title', () => {
    render(<Footer />);
    const title = screen.getByText('Ascenda Loyalty');
    expect(title).toBeInTheDocument();
  });

  test('renders correct number of items from footerData', () => {
    render(<Footer />);
    const items = screen.getAllByRole('gridcell');
    expect(items.length).toEqual(footerData.length);
  });
});
