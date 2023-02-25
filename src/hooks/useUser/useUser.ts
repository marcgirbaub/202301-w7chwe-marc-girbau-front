import decodeToken from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import useToken from "../useToken/useToken";
import { User } from "../../store/features/userSlice/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import { showErrorModal, showSuccessModal } from "../../modals/modals";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
  registerUser: (registerUserData: FormData) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const { removeToken } = useToken();
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_URL_API;
  const usersEndpoint = "users/";
  const loginEndpoint = "login/";
  const registerEndpoint = "register/";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndpoint}${loginEndpoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
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
      showSuccessModal("Login successfull");
      navigate("/");
    } catch (error) {
      showErrorModal("Invalid credentials");
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
  };

  const registerUser = async (registerUserData: FormData) => {
    try {
      await fetch(`${apiUrl}${usersEndpoint}${registerEndpoint}`, {
        method: "POST",
        body: registerUserData,
      });
    } catch (error) {}
  };

  return { loginUser, logoutUser, registerUser };
};

export default useUser;
