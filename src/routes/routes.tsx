import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Routes from "./types";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: Routes.login, element: <LoginPage /> },
      { path: Routes.register, element: <RegisterPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
