import { UserProfile } from "../../store/features/usersProfilesSlice/types";

export enum ApiUrls {
  profilesUrl = "profiles/",
  allprofilesUrl = "allprofiles/",
}

export interface AllUsersProfilesApiResponse {
  usersProfiles: UserProfile[];
}
