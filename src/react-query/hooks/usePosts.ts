import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    // With setting keepPreviousData property to true, I have a nicer UX as user goes to the next page, there is no jumping up and down. As we go in and out of the loading state, the screen jump up and down. I can improve the UX by keeping the data from current page while the user is waiting for new data. When the new data is available, I can seamless swap the data for the current page ==>
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
      // json placeholder has allPages and lastPage
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};
export default usePosts;
