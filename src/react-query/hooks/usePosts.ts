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
    // there is a point, IF I CHECK THE QueryDEVTOOLS I got null when all users selected, but it is ugly. I could fix it very easy
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, //1m
  });
};
export default usePosts;
