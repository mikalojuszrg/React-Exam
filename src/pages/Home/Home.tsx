import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Home = () => {
  const { setUser, setToken, user, token } = useContext(UserContext);
  console.log(token);
  console.log(user);
  return <div>Home</div>;
};

export default Home;
