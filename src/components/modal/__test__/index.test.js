import React from "react";
import { cleanup, fireEvent, render, screen  } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

afterEach(cleanup);

const mockCurrentPhoto = {
    name: "Grocery aisle",
    image: "commercial",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    index: 0
};


const mockOnClose = jest.fn();

describe("Modal component", () => {
    // First Test
    it("renders", () => {
        render(<Modal currentPhoto={mockCurrentPhoto} onClose={mockOnClose} />);
    });
    // Second Test
    it("matches snapshot", () => {
        const { asFragment } = render(<Modal currentPhoto={mockCurrentPhoto} onClose={mockOnClose}></Modal>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });  
})

describe("Click Event", () => {
    it("calls onClose handler", () => {
        render(<Modal currentPhoto={mockCurrentPhoto} onClose={mockOnClose}></Modal>);
        // Act: Simulate click event
        fireEvent.click(screen.getByText("Close Modal"));
        // Assert: Expected matcher
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
})