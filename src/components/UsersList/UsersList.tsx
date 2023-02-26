import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import UserCard from "../UserCard/UserCard";
import UsersListStyled from "./UsersListStyled";

const UsersList = (): JSX.Element => {
  const { getUsersProfiles } = useApi();

  useEffect(() => {
    getUsersProfiles();
  }, [getUsersProfiles]);

  const { usersProfiles } = useAppSelector((state) => state.usersProfiles);

  return (
    <UsersListStyled className="row row-cols-2 row-cols-md-4">
      {usersProfiles.map((userProfile) => (
        <li className="col" key={userProfile.id}>
          <UserCard userProfile={userProfile} />
        </li>
      ))}
    </UsersListStyled>
  );
};

export default UsersList;
