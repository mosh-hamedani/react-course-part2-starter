import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/Reducers/tasksreducer";
import TasksContext from "./state-management/contexts/taskContexts";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/AuthProvider";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
