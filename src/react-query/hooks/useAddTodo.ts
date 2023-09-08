import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constant";
import todoService, { Todo } from "../services/todoService";
interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const QueryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        QueryClient.getQueryData<Todo[]>([CACHE_KEY_TODOS]) || [];
      QueryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos = []) => [
        newTodo,
        ...todos,
      ]);
      //   Inside this hook I only want the logic part for adding todo to backend and update the cache. This hook is all about data management and should focus on that aspect only. So, I should not insert UI related logic to the consumer of this hook(TodoForm component)
      //   if (ref.current) ref.current.value = "";
      // I can pass onAdd into this hook and then do the same logic as above line in the TodoForm component.
      onAdd();
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      QueryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      QueryClient.setQueryData<Todo[]>(
        [CACHE_KEY_TODOS],
        context.previousTodos
      );
    },
  });
};

export default useAddTodo;
