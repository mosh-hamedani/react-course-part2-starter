import React from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";
import { Dispatch } from "react";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);
export default TasksContext;
