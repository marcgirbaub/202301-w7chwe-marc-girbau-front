import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage/LoginPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
];

export const router = createBrowserRouter(routes);
