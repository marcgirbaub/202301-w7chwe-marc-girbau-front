import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

const whitleList = ["/login", "/register"];

const useRouteProtection = () => {
  const { token } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token && !whitleList.includes(location.pathname)) {
      navigate("/login");
    }
  }, [location.pathname, navigate, token]);
};

export default useRouteProtection;
