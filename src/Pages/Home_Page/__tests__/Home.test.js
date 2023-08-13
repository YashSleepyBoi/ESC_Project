import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

describe("Home Component", () => {
  it("renders without errors", () => {
    const { container } = render(<Home />);
    expect(container.querySelector(".home-container")).toBeInTheDocument();
  });

  it("renders the Cover component", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("Cover")).toBeInTheDocument();
  });

  it("renders the Services component", () => {
    const { container } = render(<Home />);
    expect(container.querySelector(".services")).toBeInTheDocument();
  });

  it("renders the Features component", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("Features")).toBeInTheDocument();
  });

  it("renders the VerticalCardSwiper component", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("VerticalCardSwiper")).toBeInTheDocument();
  });
});
