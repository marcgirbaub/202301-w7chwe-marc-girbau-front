import { ToastContainer } from "react-toastify";
import { Outlet, Link } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../store/hooks";
import useUser from "../../hooks/useUser/useUser";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { isLogged } = useAppSelector((state) => state.user);

  const { logoutUser } = useUser();

  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">SocialBall</h1>
        <nav className="main-header__nav nav">
          {!isLogged && (
            <Link to={"login"} className="nav__login">
              Log in
            </Link>
          )}
          {!isLogged && (
            <Link
              to={"register"}
              className="btn btn-success nav__signup"
              type="button"
            >
              Sign up
            </Link>
          )}
          {isLogged && (
            <button className="btn btn-danger nav__logout" onClick={logoutUser}>
              Log out
            </button>
          )}
        </nav>
      </header>
      <ToastContainer hideProgressBar />
      {isLoading && <Loader />}
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
