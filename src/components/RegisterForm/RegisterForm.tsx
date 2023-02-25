import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled onSubmit={() => {}}>
      <h2>Sign up</h2>
      <div className="mb-3">
        <label htmlFor="unsername" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="unsername"
          onChange={() => {}}
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
          onChange={() => {}}
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
          onChange={() => {}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirm-password" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirm-password"
          onChange={() => {}}
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
          onChange={() => {}}
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
          onChange={() => {}}
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
          onChange={() => {}}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Sign up
      </button>
      <div className="link">
        Already a member? <a href="signup">Log in</a>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
