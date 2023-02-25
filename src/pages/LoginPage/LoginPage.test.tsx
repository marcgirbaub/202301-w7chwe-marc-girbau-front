import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../../mocks/Wrapper";
import LoginPage from "./LoginPage";

describe("Given a Loginpage component", () => {
  describe("When rendered", () => {
    test("Then it should show a Log in form with a heading 'Log in'", () => {
      const expectedLoginFormTitle = "Log in";
      render(
        <Wrapper>
          <LoginPage></LoginPage>
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const loginFormTitle = screen.getByRole("heading", {
        level: 2,
        name: expectedLoginFormTitle,
      });

      expect(loginFormTitle).toBeInTheDocument();
    });

    test("Then it should show a button `Log in`", () => {
      const expectedButton = "Log in";
      render(
        <Wrapper>
          <LoginPage></LoginPage>
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
