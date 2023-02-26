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
import {
  showErrorModal,
  showLogoutSuccessModal,
  showSuccessModal,
} from "../../modals/modals";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import Routes from "../../routes/types";

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
    dispatch(setIsLoadingActionCreator());

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

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loginUserActionCreator(logginUser));

      localStorage.setItem("token", token);

      showSuccessModal(`Welcome back, ${username}!`);
      navigate("/");
    } catch (error) {
      showErrorModal("Invalid credentials");
      dispatch(unsetIsLoadingActionCreator());
    }
  };

  const logoutUser = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
    navigate("login");
    showLogoutSuccessModal();
  };

  const registerUser = async (registerUserData: FormData) => {
    dispatch(setIsLoadingActionCreator());

    try {
      await fetch(`${apiUrl}${usersEndpoint}${registerEndpoint}`, {
        method: "POST",
        body: registerUserData,
      });

      dispatch(unsetIsLoadingActionCreator());

      showSuccessModal("Your account has been created");

      navigate(Routes.login);
    } catch (error) {
      showErrorModal("Ups, something went wrong");
      dispatch(unsetIsLoadingActionCreator());
    }
  };

  return { loginUser, logoutUser, registerUser };
};

export default useUser;
