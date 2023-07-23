import { render, fireEvent, cleanup } from '@testing-library/react';
import ImageGrid from '../ImageGrid';
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { gridImages } from '../../Content';

jest.mock('../Modal', () => () => <div data-testid="Modal-Test" />);

afterEach(cleanup);

describe('ImageGrid', () => {

  test('render image grid without crashing', () => {
    const { getAllByRole } = render(<ImageGrid isSmall={false} gridImages={gridImages} />);

    const images = getAllByRole('img');
    expect(images).toHaveLength(gridImages.length);
    expect(images[0]).toHaveAttribute('src', `${gridImages[0].img}?w=552&h=310&fit=crop&auto=format`);
    expect(images[1]).toHaveAttribute('src', `${gridImages[1].img}?w=552&h=310&fit=crop&auto=format`);
  });

  test('opens a modal when a "View More" button is clicked', async () => {
    const { getAllByRole, getAllByTestId } = render(<ImageGrid isSmall={false} gridImages={gridImages} />);

    const buttons = getAllByRole('Button');
    await act(async () => {
      fireEvent.click(buttons[0]);
    });

    expect(getAllByTestId('Modal-Test').length).toBe(4);
  });
});
