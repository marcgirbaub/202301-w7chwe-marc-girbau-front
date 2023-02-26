import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/userSlice/userSlice";
import { usersProfilesReducer } from "./features/usersProfilesSlice/usersProfilesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    usersProfiles: usersProfilesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
