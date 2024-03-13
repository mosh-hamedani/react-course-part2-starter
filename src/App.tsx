import { useReducer } from 'react';
import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';
import tasksReducer from './state-management/reducers/tasksReducer';
import { Dispatch } from 'react';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/context/tasksContext';
import AuthenticationContext from './state-management/context/authenticationContext';
import authenticationReducer from './state-management/reducers/authenticationReducer';

function App() {
  const [tasks, dispatch]  = useReducer(tasksReducer, []);
  const [username, authDispatch]  = useReducer(authenticationReducer, "");

  return <>
      <TasksContext.Provider value={{tasks, dispatch}}> 
        <AuthenticationContext.Provider value={{username, authDispatch}}>
          <NavBar></NavBar>
        </AuthenticationContext.Provider>
        <HomePage></HomePage>
      </TasksContext.Provider>
    </>;
}

export default App;
