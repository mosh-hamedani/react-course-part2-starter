import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface QueryParams {
    page: number;
    pageSize: number;
}

const usePostLists = (queries: QueryParams) => {
    const fetchPostLists = () => 
        axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _start: (queries.page - 1) * queries.pageSize,
                _limit: queries.pageSize
            }
        })
        .then(res => res.data);

    return useQuery<Post[], Error>({
        queryKey: ['posts', queries],
        queryFn: fetchPostLists,
        staleTime: 10 * 1000,
        placeholderData: keepPreviousData
    })
}

export default usePostLists;