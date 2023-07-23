import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TemporaryDrawer from "../Drawer";
import { BrowserRouter as Router } from "react-router-dom";

describe("TemporaryDrawer", () => {
  test("renders drawer button", () => {
    render(
      <Router>
        <TemporaryDrawer />
      </Router>
    );
    const button = screen.getByLabelText("hamburger");
    expect(button).toBeInTheDocument();
  });

  test("opens drawer on button click", async () => {
    render(
      <Router>
        <TemporaryDrawer />
      </Router>
    );

    const button = screen.getByLabelText("hamburger");

    userEvent.click(button);

    await waitFor(() =>
      expect(screen.getByRole("display")).toBeInTheDocument()
    );
  });

  test("renders drawer list items", async () => {
    render(
      <Router>
        <TemporaryDrawer />
      </Router>
    );

    const button = screen.getByLabelText("hamburger");
    userEvent.click(button);

    waitFor(() => {
      expect(screen.getByText("Find & Reserve")).toBeInTheDocument();
      expect(screen.getByText("Rewards")).toBeInTheDocument();
      expect(screen.getByText("Hotels")).toBeInTheDocument();
      expect(screen.getByText("Contact")).toBeInTheDocument();
    });
  });

  test("closes the drawer when a list item is clicked", async () => {
    render(
      <Router>
        <TemporaryDrawer />
      </Router>
    );

    const button = screen.getByLabelText("hamburger");
    userEvent.click(button);

    waitFor(() => {
        const listItem = screen.getByText("Find & Reserve");
        userEvent.click(listItem);
        expect(screen.queryByRole("display")).not.toBeInTheDocument()
    });
  });
});
