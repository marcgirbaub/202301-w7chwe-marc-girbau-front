import decodeToken from "jwt-decode";
import { User } from "../../store/features/userSlice/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const { removeToken } = useToken();

  const apiUrl = process.env.REACT_APP_URL_API;
  const usersEndpoint = "users/";
  const loginEndpoint = "login/";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndpoint}${loginEndpoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { sub: id, username } = tokenPayload;

      const logginUser: User = {
        username,
        token,
        id,
      };

      dispatch(loginUserActionCreator(logginUser));
      localStorage.setItem("token", token);
    } catch (error) {}
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  return { loginUser, logoutUser };
};

export default useUser;
