import { useQuery } from '@tanstack/react-query';
import useTodos from '../routing/hooks/useTodos';



const TodoList = ()=> {

  // const fetchTodos = () => 
  //   axios
  //     .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => 
  //      res.data);
  // query gets back an object with properties like data, error, isLoading, etc.
  // we get autore fetch, auto retry and caching
  const {data: todos, error, isLoading} = useTodos();

  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error?.message) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
