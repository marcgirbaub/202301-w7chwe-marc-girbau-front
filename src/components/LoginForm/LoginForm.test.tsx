import { BrowserRouter } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title `Log in`", () => {
      const heading = "Log in";

      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const expectedText = screen.getByRole("heading", {
        name: heading,
        level: 2,
      });

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });

  describe("When the user writes on the username input", () => {
    test("Then it change the value of this input", async () => {
      const usernameLabel = "Username";
      const usernameWritten = "ronaldinho";

      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const usernameInput = screen.getByLabelText(usernameLabel);
      await act(
        async () => await userEvent.type(usernameInput, usernameWritten)
      );

      expect(usernameInput).toHaveValue(usernameWritten);
    });
  });

  describe("When the user writes on the password input", () => {
    test("Then it change the value of this input", async () => {
      const passwordLabel = "Password";
      const passwordWritten = "ronaldinho10";

      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>,
        { wrapper: BrowserRouter }
      );

      const passwordInput = screen.getByLabelText(passwordLabel);
      await act(
        async () => await userEvent.type(passwordInput, passwordWritten)
      );

      expect(passwordInput).toHaveValue(passwordWritten);
    });
  });
});
