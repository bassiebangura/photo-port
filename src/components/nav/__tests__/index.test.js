import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import  Nav from ".."

const categories = [ 
    { name: "commercial", description: "Photos of grocery stores, and food trucks" },
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Nav", () => {
    //baseline test
    it ("renders", () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
    });
    //snapshot test
    it ("matches snapshot", () => { 
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
     }
);

describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        expect(screen.getByText("Oh Snap!")).toHaveTextContent("📸");
        });
    }
)

describe("links are visible", () => {
    it("inserts text into the links", () => {
        //Arrange
         render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
         />);
        //Assert

        expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(screen.getByTestId("about")).toHaveTextContent("About me");
        });
    }
)
