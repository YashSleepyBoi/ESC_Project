import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Features from "../Features";
import { BrowserRouter } from "react-router-dom";


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Link: ({ children }) => children,
  }));
  
  const mockResponse = [
    { name: "Feature 1", rating: 5.0, image_details: { prefix: "", default_image_index: 1, suffix: "" } },
    { name: "Feature 2", rating: 5.0, image_details: { prefix: "", default_image_index: 2, suffix: "" } },
    // Add more mock data here if needed
  ];
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );
  
  describe("Features Component", () => {
    it("renders without errors", async () => {
      render(
        <BrowserRouter>
          <Features />
        </BrowserRouter>
      );
  
      await waitFor(() => {
        expect(screen.getByRole("list")).toBeInTheDocument();
      });
    });
  
    it("renders the correct number of features", async () => {
      render(
        <BrowserRouter>
          <Features />
        </BrowserRouter>
      );
  
      await waitFor(() => {
        expect(screen.getAllByRole("listitem")).toHaveLength(mockResponse.length);
      });
    });
  
    it("renders reserve buttons for each feature", async () => {
      render(
        <BrowserRouter>
          <Features />
        </BrowserRouter>
      );
  
      await waitFor(() => {
        expect(screen.getAllByText("Reserve Now")).toHaveLength(mockResponse.length);
      });
    });
  
    it("renders feature titles", async () => {
      render(
        <BrowserRouter>
          <Features />
        </BrowserRouter>
      );
  
      await waitFor(() => {
        mockResponse.forEach((feature) => {
          expect(screen.getByText(feature.name)).toBeInTheDocument();
        });
      });
    });
  });