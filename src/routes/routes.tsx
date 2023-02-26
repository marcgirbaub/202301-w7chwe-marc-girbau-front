import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const routeLogin = "/login";
export const routeRegister = "/register";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: routeLogin, element: <LoginPage /> },
      { path: routeRegister, element: <RegisterPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
