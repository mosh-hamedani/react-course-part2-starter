import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const QueryClient = useQueryClient();
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1: Invalidating the cache ==> It cause a refetch data from backend, but because it is a fake API the item did not really save on it. So I cannot use this approach.
      // QueryClient.invalidateQueries({
      //   //this will invalidate all queries whose key start with 'todos'
      //   queryKey: ['todos']
      // })
      //Again, this does not work with JsonPlaceHolder so I wanna use another approach.
      //APPROACH 2: Updating the data in the cache directly
      QueryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="row mb-3"
      onSubmit={(event) => {
        event.preventDefault();
        // I've got compilation error for title ==> Type 'undefined' is not assignable to type 'string'. ==> I wanna make sure that the user types a value in the input field before I send a post request to the backend
        if (ref.current && ref.current.value)
          addTodo.mutate({
            id: 0,
            // Compilation error==>'ref.current' is possibly 'null'.==> So I should use optional chaining.
            title: ref.current?.value,
            completed: false,
            userId: 1,
          });
      }}
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
