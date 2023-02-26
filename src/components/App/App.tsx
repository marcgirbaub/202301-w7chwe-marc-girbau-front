import useToken from "../../hooks/useToken/useToken";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  const { getToken } = useToken();

  getToken();

  return <Layout />;
};

export default App;
