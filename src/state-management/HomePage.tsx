import TaskList from "./TaskList";
import useAuth from "./hooks/useAuth";

const HomePage = () => {
  const { user } = useAuth();
  return (
    <>
      {user && <p className="mt-3">Hello dear {user}</p>}
      <TaskList />
    </>
  );
};

export default HomePage;
