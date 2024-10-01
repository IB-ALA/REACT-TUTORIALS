import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ThemeToggleButton from "../../components/context-testing/button";
import { ThemeProvider } from "../../context";

describe("test toggle button component", () => {
  it("renders toggle button", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>
    );
    const button = getByTestId("toggle-btn");

    expect(button).toBeInTheDocument();
  });
});
