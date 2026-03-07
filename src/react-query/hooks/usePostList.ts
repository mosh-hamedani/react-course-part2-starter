import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePostLists = () => {
    const fetchPostLists = () => 
        axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data);

    return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPostLists,
        staleTime: 10 * 1000,
    })
}

export default usePostLists;