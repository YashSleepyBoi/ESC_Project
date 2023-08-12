
import React from "react";
import {
    screen,
  render,
  fireEvent,
  waitFor,
  findByTestId,
  getByTestId,
  getAllByTestId,
} from "@testing-library/react";
import Hotel from "../Hotel";
import { roomDesc } from "../Content";
import ActionAreaCard from "../Components/Card_";
// Mocking the necessary modules and functions
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    hotel_id: "diH7",
    start_date: "2023-08-13",
    end_date: "2023-08-20",
    no_guests: "2",
    no_rooms: "1",
  }),
  useNavigate: () => mockNavigate,
}));

// Mocking fetch using spyOn
beforeEach(() => {
  jest.resetAllMocks();

});


describe("<Hotel />", () => {
  it("renders without crashing", () => {
    render(
      <Hotel
        setBottom={jest.fn()}
      />
    );
  });

  it('renders carousel images pt-1', async () => {
    // Render the component
    const { findAllByAltText } = render(<Hotel setBottom={jest.fn()} />);
    // Wait for the component to render and fetch data
    const carouselImages = await findAllByAltText('Description when image is not found');
    // Now you can make assertions
    expect(carouselImages).toHaveLength(10); // Adjust the expected length based on your data
  });
    
  it("renders the hotel description correctly", async () => {
    const { findByTestId } = render(
      <Hotel
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );

    const hDescriptionElement = await findByTestId("hotel-description");
    expect(hDescriptionElement.textContent);
  });
  it("renders the hotel description correctly", async () => {
    const { findByTestId } = render(
      <Hotel
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );

    const hNameElement = await findByTestId("hotel-name");
    expect(hNameElement.textContent);
  });
  })
  


describe("<Card />", () => { 
    it("renders without crashing", () => {
        render(
          <ActionAreaCard
            setBottom={jest.fn()}
          />
        );
      });

    it("triggers navigation on button click", async () => {
        const { findByTestId  } = render(
          <ActionAreaCard
          />
        );
        const button = screen.getByTestId("hotel-room-click");
        fireEvent.click(button);
        waitFor(() => {
          expect(mockNavigate).toHaveBeenCalledTimes(1); // checking if the navigate function was called
        });
    });
    it('renders card images ', async () => {
        // Render the component
        const { findAllByAltText } = render(<ActionAreaCard/>);
        // Wait for the component to render and fetch data
        const carouselImages = await findAllByAltText('no image loaded');
        // Now you can make assertions
        expect(carouselImages).toHaveLength(1); // Adjust the expected length based on your data
    });
    
    
    
   
})