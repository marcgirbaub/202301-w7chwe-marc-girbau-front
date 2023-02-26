import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Social'", () => {
      const headingText = "Social";

      render(
        <Wrapper>
          <App />
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const expectedHeadingText = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeadingText).toBeInTheDocument();
    });
  });
});
