import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";
import { act } from "react-dom/test-utils";

jest.mock("pure-react-carousel", () => ({
  CarouselProvider: ({ children }) => <div>{children}</div>,
  Slider: () => <div />,
  Slide: ({ children }) => <div>{children}</div>,
  ButtonBack: ({ children }) => <div>{children}</div>,
  ButtonNext: ({ children }) => <div>{children}</div>,
}));

describe("Modal", () => {
  const mockCloseModal = jest.fn();
  const defaultProps = {
    closeModal: mockCloseModal,
    title: "Test Room",
    content: "Test Content",
  };

  it("should render Modal component", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Room Details")).toBeInTheDocument();
    expect(screen.getByText("Test Room")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should close modal on close button click", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("close"));
    expect(mockCloseModal).toHaveBeenCalled();
  });

  it("should scroll to top on 'Back to top' button click", () => {
    const { container } = render(<Modal {...defaultProps} />);
    container.querySelector(".modal-container").scrollTo = jest.fn();
    fireEvent.click(screen.getByText("Back to top"));
    expect(container.querySelector(".modal-container").scrollTo).toHaveBeenCalled();
  });

  it("should close modal on 'Close' button click", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText("Close"));
    expect(mockCloseModal).toHaveBeenCalled();
  });
});
