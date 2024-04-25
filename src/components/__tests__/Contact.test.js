import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("Should load Contact Us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Us Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should contain submit text in the component", () => {
    render(<Contact />);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
  });

  test("Should contain placeholder text in the component", () => {
    render(<Contact />);

    const placeholderText = screen.getByPlaceholderText("Enter your name");

    expect(placeholderText).toBeInTheDocument();
  });

  test("Should load all the input elements", () => {
    render(<Contact />);

    // Querying
    const inputElements = screen.getAllByRole("textbox");

    // Assertion
    expect(inputElements.length).toBe(2);
  });
});
