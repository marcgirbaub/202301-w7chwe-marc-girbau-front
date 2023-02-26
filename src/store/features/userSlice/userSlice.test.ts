import { User, UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

const initialState: UserState = {
  username: "",
  isLogged: false,
  token: "",
  id: "",
};

describe("Given a userReducer", () => {
  describe("When it receives a user and an action to log in the user", () => {
    test("Then it should return the user with its isLogged property set as true", () => {
      const user: User = {
        username: "marc",
        token: "asdgfsfdgdsfhgdfghdfgh",
        id: "",
      };
      const expectedUserState: UserState = {
        username: "marc",
        token: "asdgfsfdgdsfhgdfghdfgh",
        id: "",
        isLogged: true,
      };
      const logingUserAction = loginUserActionCreator(user);

      const newUserState = userReducer(initialState, logingUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it receives a user and an action to log out the user", () => {
    test("Then it should return the user initial state", () => {
      const logoutUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logoutUserAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
