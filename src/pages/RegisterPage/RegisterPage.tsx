import { Navigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useAppSelector } from "../../store/hooks";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return !isLogged ? (
    <RegisterPageStyled>
      <RegisterForm />
    </RegisterPageStyled>
  ) : (
    <Navigate to={"/"} />
  );
};

export default RegisterPage;
