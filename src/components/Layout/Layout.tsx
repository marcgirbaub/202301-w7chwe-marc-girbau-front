import { ToastContainer } from "react-toastify";
import { Outlet, Link } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import { useEffect } from "react";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <LayoutStyled>
      <div className="main-header">
        <h1 className="main-header__title">SocialBall</h1>
        <nav className="main-header__nav nav">
          <Link to={"login"} className="nav__login">
            Log in
          </Link>
          <Link to={"register"} className="nav__signup">
            Sign up
          </Link>
        </nav>
      </div>
      <ToastContainer hideProgressBar />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
