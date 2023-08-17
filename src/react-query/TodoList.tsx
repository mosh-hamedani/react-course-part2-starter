import axios from "axios";
// React query has automatic retry, means if the first try to fetching data fail, it will retry a couple more times(I can config it). The second benefit I get, is automatic refresh. I could configure this query to auto refresh after a period of time. I also get caching. So the first time that I fetch the data, it stored in the cache and will refresh after a certain period of time. The next time that I need the same piece of data if it is steel on the cache, I am not  gonna go to the server. I can get it directly from the cache, and this greatly improve the performance of my application.
import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
// The function below return a promise of any(I understand it by checking the signature of that function=>hover mouse on the function). Any is not a desire type in TS. I should be more specific , so I could take the advantages of TS. So I want this function to return a promise of type todo array. I specified a generic type argument inside angle bracket after .get
const fetchTodos = () =>
  axios
    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);

const TodoList = () => {
  // to fetch data with react query I use the query hook from tanstack, I call it () and give it a configuration object {} with two property. I call a query hook and get a query object that has a bunch of properties like data, error, isLoading and so on.
  const query = useQuery({
    // The first one queryKey: unique identifier for the query which is used internally for the caching. So anytime I retrieve a piece of data from the backend the data will store in cache and will be accessible via this key. I set it to an array of one or more values. The first value is often a string that identifies the type of data store here.
    queryKey: ["todos"],
    // The second property is query function. This is the function that we use to fetch the data from the backend. This function should return a promise that resolve the data or throws an error.
    // in this example I use axios but could use fetch api or any other libraries. React Query doesn't care how to fetching data. It only cares about managing and caching data.
    queryFn: fetchTodos,
  });

  const { data: todos } = query; //Or I could destructure it in the above function right away //I rename data to todos

  // if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {/* By implementing the below line below I got a compilation error that says 'todos' is possibly 'undefined'. The reason for this is because the call to the backend may fail, I might get an error. In that case, data or todos will be undefined. So I use a ? for optional chaining to fix this error*/}
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
