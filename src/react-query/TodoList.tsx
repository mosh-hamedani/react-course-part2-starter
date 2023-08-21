import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();
  // Now this component only has single responsibility is purely concerned with markup. It doesn't know how data should be fetched.
  // The other benefit is that if tomorrow I need access to these data in another component, I should only call this new hook in that component. So I use the concept of reusability and modularity.
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

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
