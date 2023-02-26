import { ToastContainer } from "react-toastify";
import { Outlet, Link } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../store/hooks";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">SocialBall</h1>
        <nav className="main-header__nav nav">
          <Link to={"login"} className="nav__login">
            Log in
          </Link>
          <Link to={"register"} className="nav__signup">
            Sign up
          </Link>
        </nav>
      </header>
      <ToastContainer hideProgressBar />
      {isLoading && <Loader />}
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
