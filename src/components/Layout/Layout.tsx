import { ToastContainer } from "react-toastify";
import { Outlet, Link } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
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
