import { useContext } from "react";
import AuthContext from "./auth/authContext";
import { TaskList } from "./tasks";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <p className="mt-3">Hello dear {user}</p>}
      <TaskList />
    </>
  );
};

export default HomePage;
