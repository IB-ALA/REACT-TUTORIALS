import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../context";
import ThemeContent from "../../components/context-testing/theme";

const ToggleConsumer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button role="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <ThemeContent />
    </div>
  );
};

describe("Test theme provider", () => {
  it("Checks for rendered children with initial light theme value", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>This is a child component</div>
      </ThemeProvider>
    );

    expect(getByText("This is a child component")).toBeInTheDocument();
  });

  it("Toggles theme on click on button", () => {
    const { getByText, getByRole } = render(
      <ThemeProvider>
        <ToggleConsumer />
      </ThemeProvider>
    );

    const button = getByRole("button", { name: /toggle theme/i });

    expect(getByText("Light Theme")).toBeInTheDocument();

    fireEvent.click(button);

    expect(getByText("Dark Theme")).toBeInTheDocument();

    fireEvent.click(button);

    expect(getByText("Light Theme")).toBeInTheDocument();
  });
});
