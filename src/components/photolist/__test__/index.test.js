import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from "@testing-library/react";
import PhotoList from "..";

const currentCategory = {
    name: "portraits",
    description: "Photos of grocery stores, food trucks, and other commercial projects"
};

afterEach(cleanup);

describe("PhotoList is rendering", () => {
    it("renders", () => {
        render(<PhotoList currentCategory={currentCategory} />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<PhotoList currentCategory={currentCategory} />);
        expect(asFragment()).toMatchSnapshot();
    });
    }
)