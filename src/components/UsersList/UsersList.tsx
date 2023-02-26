import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import UserCard from "../UserCard/UserCard";

const UsersList = (): JSX.Element => {
  const { getUsersProfiles } = useApi();

  useEffect(() => {
    getUsersProfiles();
  }, [getUsersProfiles]);

  const { usersProfiles } = useAppSelector((state) => state.usersProfiles);

  return (
    <>
      {usersProfiles.map((userProfile) => (
        <li>
          <UserCard userProfile={userProfile} key={userProfile.id} />
        </li>
      ))}
    </>
  );
};

export default UsersList;
