import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import TemporaryDrawer from "../Drawer";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HotelIcon from "@mui/icons-material/Hotel";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";


describe("TemporaryDrawer", () => {
  it("renders without crashing", () => {
    const container = render(<TemporaryDrawer />);
  });

  it("opens the drawer when hamburger icon is clicked", () => {
    const { container } = render(<TemporaryDrawer />);
    const hamburgerButton = container.querySelector(".icon-button");
  
    // Ensure the drawer is closed initially
    const drawer = container.querySelector(".drawer");
    expect(drawer).not.toHaveClass("MuiDrawer-open");
  
    // Click the hamburger button
    fireEvent.click(hamburgerButton);
  
    // Ensure the drawer is open after clicking
    expect(drawer).toHaveClass("MuiDrawer-open");
  });

  it("closes drawer when backdrop is clicked", () => {
    render(<TemporaryDrawer />);
    const hamburgerIcon = screen.getByLabelText("hamburger");
    fireEvent.click(hamburgerIcon);
    const background = screen.getByTestId("backdrop");
    fireEvent.click(background);
    const drawerElement = screen.queryByRole("presentation");
    expect(drawerElement).toBeNull();
  });

  it("renders correct icons and text in drawer", () => {
    render(<TemporaryDrawer />);
    const drawerItems = [
      { name: "Find & Reserve", icon: EventAvailableIcon },
      { name: "Rewards", icon: EmojiEventsIcon },
      { name: "Hotels", icon: HotelIcon },
      { name: "Contact", icon: AlternateEmailIcon },
    ];

    drawerItems.forEach((item) => {
      const listItem = screen.getByText(item.name);
      expect(listItem).toBeInTheDocument();
      const icon = listItem.querySelector("svg");
      expect(icon).toBeInTheDocument();
    });
  });

});
