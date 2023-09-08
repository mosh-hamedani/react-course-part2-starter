import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constant";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: [CACHE_KEY_TODOS],
    // Now I just reference that method not call that( not use parentheses .getAll() )
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, //10s it is not globally
  });
};
export default useTodos;
