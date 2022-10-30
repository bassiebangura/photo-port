import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm", () => {
    //baseline test
    it ("renders", () => {
        render(<ContactForm />);
    });
    //snapshot test
    it ("matches snapshot", () => { 
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it ("Contact Me Section Render", () => {
        render(<ContactForm />);
        expect(screen.getByTestId("h1tag")).toHaveTextContent("Contact Me");
    });

    it("Submit Button Render", () => {
        render(<ContactForm />);
        expect(screen.getByTestId("submit")).toHaveTextContent("Submit");
    }
    )
}
);