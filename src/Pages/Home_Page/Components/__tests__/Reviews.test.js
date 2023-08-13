import React from "react";
import { render } from "@testing-library/react";
import Services from "../Services";
import { Hotel, Explore, PersonalVideo } from "@mui/icons-material";

describe("Services Component", () => {
  it("renders without errors", () => {
    const { container } = render(<Services />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders correct text below each icon", () => {
    const { getByText } = render(<Services />);

    expect(getByText("Ascenda Loyalty is an end-to-end hotel booking platform")).toBeInTheDocument();
    expect(getByText("Connecting you with the best destinations around the world")).toBeInTheDocument();
    expect(getByText("Enjoy a comfortable stay in the hotel of your choice")).toBeInTheDocument();
  });

  it("renders the correct icons", () => {
    const { container } = render(<Services />);
    const icons = container.querySelectorAll("svg");

    expect(icons[0]).toContainElement(container.querySelector(Hotel));
    expect(icons[1]).toContainElement(container.querySelector(Explore));
    expect(icons[2]).toContainElement(container.querySelector(PersonalVideo));
  });
});
