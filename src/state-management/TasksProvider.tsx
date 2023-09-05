import { ReactNode, useReducer } from "react";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";

interface Props {
  children: ReactNode;
}

function TasksProvider({ children }: Props) {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
