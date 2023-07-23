import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../RoomNavBar";

describe("NavBar", () => {
  // function to mock the scroll event
  const mockScrollEvent = (scrollY) => {
    global.window.scroll = scrollY;
    global.window.dispatchEvent(new Event("scroll"));
  };

  test("renders without crashing", () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });

  test("should initially display the NavBar", () => {
    const { container } = render(<Router><NavBar /></Router>);
    const header = container.querySelector("#navbar");
    expect(header).toHaveStyle("top: 0");
  });

  test("should hide the NavBar when scrolling down", async () => {
    const { container } = render(<Router><NavBar /></Router>);
    mockScrollEvent(200);
    fireEvent.scroll(window);
    const header = container.querySelector("#navbar");
    waitFor(() => {
        expect(header).toHaveStyle("top: -81px"); // asynchronously waiting for the header to hide
    });
  });

  test("should show the NavBar when scrolling up", () => {
    const { container } = render(<Router><NavBar /></Router>);
    const header = container.querySelector("#navbar");
    mockScrollEvent(100);
    fireEvent.scroll(window);
    mockScrollEvent(-50);
    fireEvent.scroll(window);
    waitFor(() => {
      expect(header).toHaveStyle("top: 0"); // asynchronously waiting for the header to show
    });
  });
});
