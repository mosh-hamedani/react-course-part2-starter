import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery{
    page: number;
    pageSize: number;

}

const usePosts = (query: PostQuery ) => useQuery<Post[], Error>({
    queryKey: ["users", query],
    queryFn: ()=> (
        axios
			.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
			.then(res => res.data)
    ),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true
})

export default usePosts;