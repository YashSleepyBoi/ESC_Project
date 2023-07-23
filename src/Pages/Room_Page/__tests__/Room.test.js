import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Room from "../Room";

describe("Room Component", () => {
  test("renders the component without errors", () => {
    const { container } = render(<Room />);
    expect(container).toBeInTheDocument();
  });

  test("displays the correct header", () => {
    const { getByText } = render(<Room />);
    const headerElement = getByText("Accommodations");
    expect(headerElement).toBeInTheDocument();
  });
  test("display the correct accomodation description", () => {
    const expectedDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod harum sunt cupiditate tempora sint blanditiis sapiente, quasi ea, illum consequuntur pariatur. Magnam natus eaque accusamus vel veritatis odit officiis, ad tenetur earum ullam facere dolores consectetur animi optio corporis eius temporibus inventore nisi dolorem tempore? Est minima, temporibus aspernatur aliquid soluta veritatis nesciunt laboriosam aut rem nulla accusantium quas amet iste ullam unde ducimus omnis, fuga harum aperiam. Voluptatum nostrum libero, fugit officiis ab repellat ex dignissimos eum qui perferendis iste. Doloremque adipisci, libero molestias quasi est minus nihil quo quisquam, blanditiis mollitia distinctio. Veniam voluptatum corporis at modi facere!"; 
    const { getByText } = render(<Room />);
    const descriptionElement = getByText(expectedDescription);
    expect(descriptionElement).toBeInTheDocument();
  });
  test("display the correct room header", () => {
    const expectedDescription = "Designer Rooms"; 
    const { getByText } = render(<Room />);
    const descriptionElement = getByText(expectedDescription);
    expect(descriptionElement).toBeInTheDocument();
  });
  test("display the correct room description", () => {
    const expectedDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod harum sunt cupiditate tempora sint blanditiis sapiente, quasi ea, illum consequuntur pariatur. Magnam natus eaque accusamus vel veritatis odit officiis, ad tenetur earum ullam facere dolores consectetur animi optio corporis eius temporibus inventore nisi dolorem tempore? Est minima, temporibus aspernatur aliquid soluta veritatis nesciunt laboriosam aut rem nulla accusantium quas amet iste ullam unde ducimus omnis, fuga harum aperiam. Voluptatum nostrum libero, fugit officiis ab repellat ex dignissimos eum qui perferendis iste. Doloremque adipisci, libero molestias quasi est minus nihil quo quisquam, blanditiis mollitia distinctio. Veniam voluptatum corporis at modi facere!"; 
    const { getByText } = render(<Room />);
    const descriptionElement = getByText(expectedDescription);
    expect(descriptionElement).toBeInTheDocument();
  });
});
