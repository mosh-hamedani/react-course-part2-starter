import { useQuery } from "@tanstack/react-query";
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const usePosts = (userId: number | undefined, page: number) => {
          const fetchPosts = async (): Promise<Post[]> => {
            const url = new URL('https://jsonplaceholder.typicode.com/posts')

             // Add query parameters
            if (userId !== undefined) {
                url.searchParams.append('userId', userId.toString());
            }

            // pagination
            url.searchParams.append('_page', page.toString());
            url.searchParams.append('_limit', '10'); // Limit to 10 posts per page

            const res = await fetch(url.toString());

            if (!res.ok) {
            //   console.log("failed")
              throw new Error(`Failed to fetch todos: ${res.statusText}`);
            }
            const data = await res.json();
            // console.log(data)
            return data as Post[];
          };
    
          return useQuery<Post[], Error>({
            // need to take out
            queryKey:['users',userId,'posts', page],
            queryFn: fetchPosts,
            // keepPreviousData: true, // Keep previous data while fetching new data
          })
}

export default usePosts;