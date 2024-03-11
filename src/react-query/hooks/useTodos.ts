import { useQuery } from "@tanstack/react-query";
import todoService, { Todo } from "../../services/todoService";
import { CACHE_KEY_TODO } from "../constants";

const useTodos = () =>{

    return useQuery<Todo[], Error>({
		queryKey: CACHE_KEY_TODO,
		queryFn: todoService.getAll,
        staleTime: 10 * 1000
    })
}


export default useTodos;