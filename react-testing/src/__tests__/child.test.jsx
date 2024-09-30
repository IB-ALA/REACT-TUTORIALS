import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Child from "../components/child";

test("checks props value", () => {
  const { getByTestId } = render(<Child count={500} />);
  const getElement = getByTestId("child-count-value");

  expect(getElement.textContent).toBe("500");
});

test("check state (theme) changes", () => {
  const { getByTestId } = render(<Child count={123} />);
  const togglebutton = getByTestId("toggle-button");
  const toggleText = getByTestId("toggle-text");

  expect(toggleText.textContent).toBe("false");

  fireEvent.click(togglebutton);

  expect(toggleText.textContent).toBe("true");

  fireEvent.click(togglebutton);

  expect(toggleText.textContent).toBe("false");
});
