import { useEffect } from "react";
import useRouteProtection from "../../hooks/useRouteProtection/useRouteProtection";
import useToken from "../../hooks/useToken/useToken";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  const { getToken } = useToken();

  useRouteProtection();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return <Layout />;
};

export default App;
