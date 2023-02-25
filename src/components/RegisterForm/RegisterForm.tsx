import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { RegisterData } from "../../types";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();

  const initialRegisterData: RegisterData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    location: "",
  };

  let userFormData = new FormData();

  const [registerData, setRegisterData] = useState(initialRegisterData);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    userFormData.append("username", registerData.username);
    userFormData.append("email", registerData.email);
    userFormData.append("password", registerData.password);
    userFormData.append("passwordConfirmation", registerData.confirmPassword);
    userFormData.append("location", registerData.location);
    userFormData.append("age", registerData.age);

    registerUser(userFormData);

    setRegisterData({ ...initialRegisterData });
  };

  const onChangeFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [event.target.id]: event.target.value });
  };

  const onChangeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    userFormData.append("avatar", event.target.files![0]);
  };

  const areFieldsEmpty =
    registerData.username === "" ||
    registerData.password === "" ||
    registerData.confirmPassword === "" ||
    registerData.age === "" ||
    registerData.email === "" ||
    registerData.location === "";

  return (
    <RegisterFormStyled onSubmit={onSubmitHandler} autoComplete="off">
      <h2>Sign up</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={onChangeFieldHandler}
          value={registerData.username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={onChangeFieldHandler}
          value={registerData.email}
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
          onChange={onChangeFieldHandler}
          value={registerData.password}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirm-password" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          onChange={onChangeFieldHandler}
          value={registerData.confirmPassword}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="text"
          className="form-control"
          id="age"
          onChange={onChangeFieldHandler}
          value={registerData.age}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          onChange={onChangeFieldHandler}
          value={registerData.location}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="profile-picture" className="form-label">
          Profile picture
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          onChange={onChangeImageHandler}
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
        disabled={areFieldsEmpty}
      >
        Sign up
      </button>
      <div className="link">
        Already a member? <Link to="/login">Log in</Link>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
