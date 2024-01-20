import { Dispatch, createContext } from "react";
import { Task, TaskAction } from "../Reducers/tasksreducer";

interface tasksContext {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = createContext<tasksContext>({} as tasksContext);

export default TasksContext;
