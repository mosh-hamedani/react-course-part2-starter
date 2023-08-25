import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const QueryClient = useQueryClient();
  // The React Query doesn't know what kind of error we might get. So similar to the previous,  I should supply generic type arguments when writing(creating) a mutation==>
  // As soon as I put < in front of useMutation I see a message : ===>
  // useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(options: UseMutationOptions<TData, TError, TVariables, TContext>): UseMutationResult<TData, TError, TVariables, TContext>
  // TData : present the kind of data that I get from backend ==> Todo object
  // TError : present my error ==> Error object
  // TVariables : that present the data that  send to the backend ==> Todo object
  // In some applications the data that I send to backend is different from the data that I receive from it.
  const addTodo = useMutation<Todo, Error, Todo>({
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
