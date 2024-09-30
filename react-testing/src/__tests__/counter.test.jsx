import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/counter";

test("Checks counter value", () => {
  const { getByText } = render(<Counter />);
  const getCounterText = getByText("Count is: 0");
  const getButtonElement = getByText("Click");

  expect(getCounterText).toBeInTheDocument();

  fireEvent.click(getButtonElement);

  expect(getCounterText.textContent).toBe("Count is: 1");

  fireEvent.click(getButtonElement);

  expect(getCounterText.textContent).toBe("Count is: 2");
});
