import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from "@testing-library/react";
import Gallery from "..";

const currentCategory = {
    name: "portraits",
    description: "Photos of grocery stores, food trucks, and other commercial projects"
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
    it("renders", () => {
        render(<Gallery currentCategory={currentCategory} />);
    });

    it("title is 'Portraits'", () => {
        render(<Gallery currentCategory={currentCategory} />);
        expect(screen.getByTestId("h1tag")).toHaveTextContent("Portraits");
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Gallery currentCategory={currentCategory} />);
        expect(asFragment()).toMatchSnapshot();
    });
    });

