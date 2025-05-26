import { useQuery } from "@tanstack/react-query";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }
const useTodos = () => {
      const fetchTodos = async (): Promise<Todo[]> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!res.ok) {
          console.log("failed")
          throw new Error(`Failed to fetch todos: ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data)
        return data as Todo[];
      };

      return useQuery<Todo[], Error>({
        queryKey:['todos'],
        queryFn: fetchTodos,
      })
    
}

export default useTodos;