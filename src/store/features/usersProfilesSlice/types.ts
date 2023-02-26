export interface UsersProfiles {
  usersProfiles: UserProfile[];
}

export interface UserProfile {
  username: string;
  email: string;
  location: string;
  age: string;
  friends: [];
  enemies: [];
  id: string;
  avatar: string;
}
