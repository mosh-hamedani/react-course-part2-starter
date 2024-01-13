import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("/todos");

interface AddTodosContext {
  previousTodo: Todo[];
}
const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodosContext>({
    mutationFn: apiClient.post,
    onMutate: (newTodo: Todo) => {
      const previousTodo =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      onAdd();

      return { previousTodo };
    },
    onSuccess: (savedTodo: Todo, newTodo: Todo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error: Error, newTodo: Todo, context: AddTodosContext) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodo);
    },
  });
};

export default useAddTodo;
