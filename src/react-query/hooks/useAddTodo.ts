import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODO } from "../constants";
import APIClient from "../services/apiClient";
import todoService, { Todo } from "../services/todoService";
interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODO) || [];
      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODO, (todos = []) => [
        newTodo,
        ...todos,
      ]);
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      //Approach 1: Invalidating the  cache
      // queryClient.invalidateQueries({
      //   queryKey:['todos']
      // })

      //Approach 2: Updating the data in cache
      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODO, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
      onAdd();
      //
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODO, context.previousTodos);
    },
  });
};

export default useAddTodo;
