import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePostLists = (userId: number | undefined) => {
    const fetchPostLists = () => 
        axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                userId
            }
        })
        .then(res => res.data);

    return useQuery<Post[], Error>({
        queryKey: userId ? ['user', userId, "posts"] : ['posts'],
        queryFn: fetchPostLists,
        staleTime: 10 * 1000,
    })
}

export default usePostLists;