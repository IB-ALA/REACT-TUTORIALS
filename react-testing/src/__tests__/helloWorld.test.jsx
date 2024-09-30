import { render } from "@testing-library/react";
import HelloWorld from "../components/helloWorld";
import "@testing-library/jest-dom";

test("render hello world text", () => {
  const { getByText } = render(<HelloWorld />);
  const checkHelloWorldText = getByText("Hello World");

  expect(checkHelloWorldText).toBeInTheDocument();
});
