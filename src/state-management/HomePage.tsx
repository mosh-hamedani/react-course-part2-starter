import { useContext } from "react";
import TaskList from "./TaskList";
import AuthContext from "./contexts/authContext";

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
