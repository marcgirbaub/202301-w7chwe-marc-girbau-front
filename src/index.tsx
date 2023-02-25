import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";
import { router } from "./routes/routes";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
