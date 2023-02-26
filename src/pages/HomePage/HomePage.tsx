import useApi from "../../hooks/useApi/useApi";

const HomePage = (): JSX.Element => {
  const { getUsersProfiles } = useApi();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getUsersProfiles}>Hola</button>
    </div>
  );
};

export default HomePage;
