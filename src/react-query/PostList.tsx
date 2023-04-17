import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
