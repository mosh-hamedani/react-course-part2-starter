import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import Counter from "./state-management/counter/Counter";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <TaskProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TaskProvider>
  );
}

export default App;
