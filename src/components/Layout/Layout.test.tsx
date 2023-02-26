import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import Layout from "./Layout";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Social'", () => {
      const titleText = "Social";

      render(
        <Wrapper>
          <GlobalStyles />
          <Layout />
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const expectedTitle = screen.getByRole("heading", { name: titleText });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
