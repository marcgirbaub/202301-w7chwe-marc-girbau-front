import { UserProfile } from "../../store/features/usersProfilesSlice/types";

interface UserCardProps {
  userProfile: UserProfile;
}

const UserCard = ({
  userProfile: { age, email, username, location },
}: UserCardProps): JSX.Element => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`age: ${age}`}</li>
        <li className="list-group-item">{`location: ${location}`}</li>
        <li className="list-group-item">{`email: ${email}`}</li>
      </ul>
      <div className="card-body">
        <button className="card-link">Friendzone</button>
        <button className="card-link">Deathzone</button>
      </div>
    </div>
  );
};

export default UserCard;
