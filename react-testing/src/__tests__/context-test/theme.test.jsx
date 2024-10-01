import "@testing-library/jest-dom";
import ThemeContent from "../../components/context-testing/theme";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../context";

describe("toggle content component", () => {
  it("render content based on current theme", () => {
    const { getByText } = render(
      <ThemeProvider>
        <ThemeContent />
      </ThemeProvider>
    );

    expect(getByText("Light Theme")).toBeInTheDocument();
  });
});
