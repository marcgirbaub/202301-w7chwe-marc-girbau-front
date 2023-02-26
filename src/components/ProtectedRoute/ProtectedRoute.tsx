import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps): JSX.Element => {
  const { token } = useAppSelector((state) => state.user);

  return token ? element : <Navigate to={"/login"} replace={true} />;
};

export default ProtectedRoute;
