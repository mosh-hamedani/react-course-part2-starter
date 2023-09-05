import "./App.css";
import TasksProvider from "./state-management/TasksProvider";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
