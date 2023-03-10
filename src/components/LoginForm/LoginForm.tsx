import { Link } from "react-router-dom";
import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import LoginFormStyled from "./LoginFormStyled";
import { useAppSelector } from "../../store/hooks";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const { isLoading } = useAppSelector((state) => state.ui);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const areFieldsEmpty = username === "" || password === "";

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <LoginFormStyled onSubmit={onSubmitHandler}>
      <h2>Log in</h2>
      <div className="mb-3">
        <label htmlFor="unsername" className="form-label">
          Username
        </label>
        <input
          type="unsername"
          className="form-control"
          id="unsername"
          onChange={handleUsername}
          value={username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handlePassword}
          value={password}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={areFieldsEmpty || isLoading}
      >
        Log in
      </button>
      <div className="link">
        Not a member? <Link to="/register">Sign up</Link>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
