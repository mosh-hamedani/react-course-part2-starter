import { useQuery } from "@tanstack/react-query";
import todoService, { Todo } from "../../services/todoService";

const useTodos = () =>{

    return useQuery<Todo[], Error>({
		queryKey: ['todos'],
		queryFn: todoService.getAll,
        staleTime: 10 * 1000
    })
}


export default useTodos;