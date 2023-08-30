import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constant";

// Here I provide an instance of this class
const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: [CACHE_KEY_TODOS],
    // Now I just reference that method not call that( not use parentheses .getAll() )
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, //10s it is not globally
  });
};
export default useTodos;
