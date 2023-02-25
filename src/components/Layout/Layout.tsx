import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <div>
      <h1>SocialBall</h1>
      <ToastContainer hideProgressBar />
      <Outlet />
    </div>
  );
};

export default Layout;
