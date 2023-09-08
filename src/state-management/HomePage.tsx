import { useContext } from "react";
import { TaskList } from "./tasks";
import useAuthStore from "./auth/store";

const HomePage = () => {
  const { user } = useAuthStore();
  return (
    <>
      {user && <p className="mt-3">Hello dear {user}</p>}
      <TaskList />
    </>
  );
};

export default HomePage;
