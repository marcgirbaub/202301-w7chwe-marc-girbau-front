import { useCallback } from "react";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { loadUsersProfilesActionCreator } from "../../store/features/usersProfilesSlice/usersProfilesSlice";
import { useAppDispatch } from "../../store/hooks";
import { AllUsersProfilesApiResponse, ApiUrls } from "./types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getUsersProfiles = useCallback(async () => {
    dispatch(setIsLoadingActionCreator());

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API}${ApiUrls.profilesUrl}${ApiUrls.allprofilesUrl}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=UTF-8'" },
        }
      );

      const { usersProfiles }: AllUsersProfilesApiResponse =
        await response.json();

      if (!response.ok) {
        return;
      }

      dispatch(unsetIsLoadingActionCreator());

      dispatch(loadUsersProfilesActionCreator(usersProfiles));
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getUsersProfiles };
};

export default useApi;
