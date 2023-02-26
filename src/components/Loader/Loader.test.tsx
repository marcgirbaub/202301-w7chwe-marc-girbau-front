import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given a loader element", () => {
  describe("When a page is loading and the Loader is rendered", () => {
    test("It should show an aria-label attribute with the text 'The page is loading '", () => {
      const expectedAriaLabel = "The page is loading";

      render(<Loader />);

      const text = screen.getByRole("dialog", {
        name: expectedAriaLabel,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
