// import React from "react";
// import { render } from "@testing-library/react";
// import '@testing-library/jest-dom'
// import Room from "../Room";

// describe("Room Component", () => {
//   test("renders the component without errors", () => {
//     const { container } = render(<Room />);
//     expect(container).toBeInTheDocument();
//   });

//   test("displays the correct header", () => {
//     const { getByText } = render(<Room />);
//     const headerElement = getByText("Accommodations");
//     expect(headerElement).toBeInTheDocument();
//   });
//   test("display the correct accomodation description", () => {
//     const expectedDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod harum sunt cupiditate tempora sint blanditiis sapiente, quasi ea, illum consequuntur pariatur. Magnam natus eaque accusamus vel veritatis odit officiis, ad tenetur earum ullam facere dolores consectetur animi optio corporis eius temporibus inventore nisi dolorem tempore? Est minima, temporibus aspernatur aliquid soluta veritatis nesciunt laboriosam aut rem nulla accusantium quas amet iste ullam unde ducimus omnis, fuga harum aperiam. Voluptatum nostrum libero, fugit officiis ab repellat ex dignissimos eum qui perferendis iste. Doloremque adipisci, libero molestias quasi est minus nihil quo quisquam, blanditiis mollitia distinctio. Veniam voluptatum corporis at modi facere!";
//     const { getByText } = render(<Room />);
//     const descriptionElement = getByText(expectedDescription);
//     expect(descriptionElement).toBeInTheDocument();
//   });
//   test("display the correct room header", () => {
//     const expectedDescription = "Designer Rooms";
//     const { getByText } = render(<Room />);
//     const descriptionElement = getByText(expectedDescription);
//     expect(descriptionElement).toBeInTheDocument();
//   });
//   test("display the correct room description", () => {
//     const expectedDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod harum sunt cupiditate tempora sint blanditiis sapiente, quasi ea, illum consequuntur pariatur. Magnam natus eaque accusamus vel veritatis odit officiis, ad tenetur earum ullam facere dolores consectetur animi optio corporis eius temporibus inventore nisi dolorem tempore? Est minima, temporibus aspernatur aliquid soluta veritatis nesciunt laboriosam aut rem nulla accusantium quas amet iste ullam unde ducimus omnis, fuga harum aperiam. Voluptatum nostrum libero, fugit officiis ab repellat ex dignissimos eum qui perferendis iste. Doloremque adipisci, libero molestias quasi est minus nihil quo quisquam, blanditiis mollitia distinctio. Veniam voluptatum corporis at modi facere!";
//     const { getByText } = render(<Room />);
//     const descriptionElement = getByText(expectedDescription);
//     expect(descriptionElement).toBeInTheDocument();
//   });
// });

import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  findByTestId,
} from "@testing-library/react";
import Room from "../Room";
import { roomDesc } from "../Content";

// Mocking the necessary modules and functions
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    hotel_id: "123",
    room_id: "456",
    guests: "3",
    start_date: "2023-08-13",
    end_date: "2023-08-20",
    rooms: "2",
    h_name: "Test Hotel",
  }),
  useNavigate: () => mockNavigate,
}));

// Mocking fetch using spyOn
beforeEach(() => {
  jest.resetAllMocks();
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          rooms: [
            {
              type: "456",
              roomDescription: "Test Room Description",
              long_description: "<strong>Test Content</strong>",
              images: [
                { high_resolution_url: "test1.jpg" },
                { high_resolution_url: "test2.jpg" },
                { url: "test3.jpg" },
              ],
              amenities: [],
            },
          ],
        }),
    })
  );
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe("<Room />", () => {
  it("renders without crashing", () => {
    render(
      <Room
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );
  });

  it("renders the correct number of images in the carousel", async () => {
    const { findAllByAltText } = render(
      <Room
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );

    const images = await findAllByAltText("room");
    expect(images).toHaveLength(3);
  });

  it("triggers navigation on button click", async () => {
    const { getByText } = render(
      <Room
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );

    const button = getByText("Book Now");
    fireEvent.click(button);

    waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1); // checking if the navigate function was called
    });
  });
  it("renders the room description correctly", async () => {
    const { findByTestId } = render(
      <Room
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );

    const roomDescriptionElement = await findByTestId("room-description");
    expect(roomDescriptionElement.textContent).toBe("Test Room Description");
  });

  it("renders the long description when available", async () => {
    const { findByTestId } = render(
      <Room
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );

    const longDescriptionElement = await findByTestId("room-long-description");
    waitFor(() => {
      expect(longDescriptionElement.textContent).toBe("Test Content");
    });
  });

  it("renders the default room description when long description is not available", async () => {
    // adjusting fetch to not have a long_description
    jest.spyOn(global, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            rooms: [
              {
                type: "456",
                images: [],
                amenities: [],
              },
            ],
          }),
      })
    );

    const { findByTestId } = render(
      <Room
        setBottom={jest.fn()}
        setHotelNavbar={jest.fn()}
        setHotelName={jest.fn()}
      />
    );

    const defaultRoomDescriptionElement = await findByTestId(
      "room-long-description"
    );
    expect(defaultRoomDescriptionElement.textContent).toBe(roomDesc);
  });
});
