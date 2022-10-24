import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import  Nav from ".."

afterEach(cleanup);

describe("Nav", () => {
    //baseline test
    it ("renders", () => {
        render(<Nav />);
    });
    //snapshot test
    it ("matches snapshot", () => { 
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
     }
);

describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        render(<Nav />);
        expect(screen.getByText("Oh Snap!")).toHaveTextContent("📸");
        });
    }
)

describe("links are visible", () => {
    it("inserts text into the links", () => {
        //Arrange
         render(<Nav />);
        //Assert

        expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(screen.getByTestId("about")).toHaveTextContent("About me");
        });
    }
)
