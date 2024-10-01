import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import ApiCallTest from "../components/api-testing";

describe("Api testing", () => {
  it("Check list of products fetching", async () => {
    // we have to mock the fetch method of js
    // mock it very well (see the "data:[]" side of the mock.)
    // should match the real one from the api

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [
              { product_id: 1, name: "umbrella" },
              { product_id: 2, name: "shirt" },
              { product_id: 3, name: "soap" },
            ],
          }),
      })
    );

    render(<ApiCallTest />);

    expect(screen.getByText("Loading data...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("umbrella")).toBeInTheDocument();
      expect(screen.getByText("shirt")).toBeInTheDocument();
      expect(screen.getByText("soap")).toBeInTheDocument();
    });

    expect(screen.queryByText("Loadind data...")).not.toBeInTheDocument();
  });
});
