import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Todo {
	id: number;
	title: string;
	userId: number;
	completed: boolean;
}

// This is how to fetch data using react-query, we get automatic refetching, retries and caching
const useTodos = () => {
	const fetchTodos = () =>
		axios
			.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.data);

	return useQuery<Todo[], Error>({
		queryKey: ["todos"],
		queryFn: fetchTodos,
		staleTime: 10 * 1000, // 10 seconds - override default settings
	});
};

export default useTodos;
