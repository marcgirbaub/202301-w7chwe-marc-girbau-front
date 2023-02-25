import { Outlet } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const Layout = (): JSX.Element => {
  return (
    <>
      <h1>SocialBall</h1>
      <Outlet />
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default Layout;
