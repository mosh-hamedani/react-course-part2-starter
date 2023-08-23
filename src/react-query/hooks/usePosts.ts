import axios from "axios";
import { useQuery } from "@tanstack/react-query";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const usePosts = (userId: number | undefined) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId,
        },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    // The queryKey is exactly the same as ==> /users/1/posts
    // Moreover, anytime the userId changes our query will get re-executed(like dependency array in useEffect hook)

    queryKey: ["users", userId, "posts"],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, //1m
  });
};
export default usePosts;
