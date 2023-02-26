import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";

const UsersList = (): JSX.Element => {
  const { getUsersProfiles } = useApi();

  useEffect(() => {
    getUsersProfiles();
  }, [getUsersProfiles]);

  const { usersProfiles } = useAppSelector((state) => state.usersProfiles);

  return (
    <>
      {usersProfiles.map((userProfile) => (
        <li></li>
      ))}
    </>
  );
};

export default UsersList;
