import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODO } from "../constants";
import APIClient from "../services/apiClient";
import todoService, { Todo } from "../services/todoService";

const apiClient = new APIClient<Todo>("/todos");
const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODO,
    queryFn: todoService.getAll,
  });
};
export default useTodos;
