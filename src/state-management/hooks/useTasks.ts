import { useContext } from "react";
import TasksContext from "../contexts/tasksContext";

const useTasks = () => useContext(TasksContext);
export default useTasks;
