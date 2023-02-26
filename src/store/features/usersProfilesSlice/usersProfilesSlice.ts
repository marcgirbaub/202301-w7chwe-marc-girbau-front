import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile, UsersProfiles } from "./types";

const initialUsersProfilesState: UsersProfiles = {
  usersProfiles: [],
};

const usersProfilesSlice = createSlice({
  name: "usersProfiles",
  initialState: initialUsersProfilesState,
  reducers: {
    loadUsersProfiles: (
      currentUsersProfilesState,
      action: PayloadAction<UserProfile[]>
    ): UsersProfiles => ({
      ...currentUsersProfilesState,
      usersProfiles: action.payload,
    }),
  },
});

export const usersProfilesReducer = usersProfilesSlice.reducer;
export const { loadUsersProfiles: loadUsersProfilesActionCreator } =
  usersProfilesSlice.actions;
