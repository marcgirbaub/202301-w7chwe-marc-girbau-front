import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
];

export const router = createBrowserRouter(routes);
