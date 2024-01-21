import { ReactNode, useReducer } from "react";
import tasksReducer from "./Reducers/tasksreducer";
import TasksContext from "./contexts/taskContexts";

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
