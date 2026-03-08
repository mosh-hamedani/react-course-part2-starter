import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.isPending && <p>Loading</p>}

      {addTodo.isError && <p>Error Occured</p>}

      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              userId: 1,
              completed: false,
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
    </>
  );
};

export default TodoForm;
