import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/Reducers/tasksreducer";
import TasksContext from "./state-management/contexts/taskContexts";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
