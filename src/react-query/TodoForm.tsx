import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

interface AddTodoContext {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const QueryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    // I've got an error here, but it is not because of mutationFn. It is because of previousTodos that I defined as an array but in onMutate function the signature says it could be ==> const previousTodos: Todo[] | undefined ====>So to solve that I add || [] to the end of that constant.
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    // I have another function here called onMutate to implement optimistic updates
    onMutate: (newTodo: Todo) => {
      const previousTodos = QueryClient.getQueryData<Todo[]>(["todos"]) || [];
      QueryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = "";
      return { previousTodos };
    },
    // Now for handling success and error scenario
    onSuccess: (savedTodo, newTodo) => {
      QueryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    // If the request failed, I should roll back and restore the UI to the previous state. However, I need a context object that includes the previous todos before I updated the cache. I create a context object in above inside the onMutate function.
    onError: (error, newTodo, context) => {
      if (!context) return;

      QueryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
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
          <button disabled={addTodo.isLoading} className="btn btn-primary">
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
