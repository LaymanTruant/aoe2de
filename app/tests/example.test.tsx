import React from "react";
import { render } from "@testing-library/react";

// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>;

describe("test", () => {
  it("should display the correct title", () => {
    expect.assertions(1);
    const { getByTestId } = render(<Title />);
    // Assertion
    expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!");
    // --> Test will pass
  });
});
