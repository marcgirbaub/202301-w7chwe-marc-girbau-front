import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../../mocks/Wrapper";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a Sign in form with a heading 'Sign up'", () => {
      const expectedLoginFormTitle = "Sign up";
      render(
        <Wrapper>
          <RegisterPage></RegisterPage>
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const loginFormTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedLoginFormTitle,
      });

      expect(loginFormTitle).toBeInTheDocument();
    });

    test("Then it should show a button `Sign up`", () => {
      const expectedButton = "Sign up";
      render(
        <Wrapper>
          <RegisterPage></RegisterPage>
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const submitButton = screen.getByRole("button", {
        name: expectedButton,
      });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
