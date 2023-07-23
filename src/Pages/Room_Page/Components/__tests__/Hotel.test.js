import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Hotel from '../../Hotel';

describe("Hotel Tests", () => {
    test('renders carousel images', () => {
        const { getAllByRole } = render(<Hotel />);
        const carouselImages = getAllByRole('img');
        expect(carouselImages).toHaveLength(28); // Assuming there are two carousel images
      }); 
      
      test('renders w/o crashing', () => {
        render(<Hotel />);
        expect(screen.getByTestId("hotel_main")).toBeInTheDocument();
      });
    
      test('toggle description', () => {
        const { getByText, getByTestId } = render(<Hotel/>);
        const seeMoreButton = screen.getByTestId('myBtn');
        const moreText = screen.getByTestId('more');
      
        fireEvent.click(seeMoreButton);
        expect(moreText).toHaveStyle('display: inline');
      });
    
     
})
