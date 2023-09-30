import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return <div>this is Home : {authInfo.name}</div>;
};

export default Home;
