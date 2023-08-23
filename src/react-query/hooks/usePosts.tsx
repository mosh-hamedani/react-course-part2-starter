import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const usePosts = () =>
  useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: () =>
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.data),
    staleTime: 60 * 1000,
  });

export default usePosts;
