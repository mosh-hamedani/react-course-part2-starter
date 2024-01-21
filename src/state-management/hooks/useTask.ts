import { useContext } from "react";
import TasksContext from "../contexts/taskContexts";

const useTask = () => useContext(TasksContext);

export default useTask;
