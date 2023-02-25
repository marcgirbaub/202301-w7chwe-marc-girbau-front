import styled from "styled-components";

const LoginFormStyled = styled.form`
  border-radius: 1rem;
  padding: 2rem;
  min-width: 300px;
  max-width: 400px;
  box-shadow: 0 0 5px 5px #e1e0e0;

  h2 {
    margin-bottom: 10px;
    text-align: center;
  }

  button {
    width: 100%;
    margin-top: 0.5rem;
  }

  input {
    background-color: #f3f3f3;
  }

  .link {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      color: #0d6efd;
      font-weight: bold;
    }
  }
`;

export default LoginFormStyled;
