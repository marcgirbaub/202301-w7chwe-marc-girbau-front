import { UserProfile, UsersProfiles } from "./types";
import {
  loadUsersProfilesActionCreator,
  usersProfilesReducer,
} from "./usersProfilesSlice";

const initialUsersProfilesState: UsersProfiles = {
  usersProfiles: [],
};

describe("Given a usersProfilesReducer", () => {
  describe("When it receives the action to loadUsersProfiles with 2 users", () => {
    test("Then it should return the list with these 2 users", () => {
      const usersToLoad: UserProfile[] = [
        {
          username: "ronaldinho",
          age: "46",
          avatar: "ronni.jpeg",
          email: "sdfasdf",
          enemies: [],
          friends: [],
          id: "12341234",
          location: "br",
        },
        {
          username: "messi",
          age: "35",
          avatar: "messi.jpeg",
          email: "sdfasdf",
          enemies: [],
          friends: [],
          id: "sdfsad234",
          location: "arg",
        },
      ];
      const expectedUsersProfilesState: UsersProfiles = {
        usersProfiles: usersToLoad,
      };

      const loadUsersProfilesAction =
        loadUsersProfilesActionCreator(usersToLoad);

      const newUsersProfilesState = usersProfilesReducer(
        initialUsersProfilesState,
        loadUsersProfilesAction
      );

      expect(newUsersProfilesState).toStrictEqual(expectedUsersProfilesState);
    });
  });
});
