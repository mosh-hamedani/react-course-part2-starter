import { useState } from 'react';
import usePosts from '../routing/hooks/usePosts';


const PostList = () => {
const [userId, setUserId] = useState<number>();
const [page, setPage] = useState(1);
const {data: posts, error, isLoading} = usePosts(userId, page);
if (isLoading) return <p>Loading...</p>
if (error) return <p>{error.message}</p>;
console.log("data.length", posts.length)
console.log("page,page)", page)

const POSTS_PER_PAGE = 10; // Same as the _limit in the API request
  return (
    <>
    <select
      onChange={(event) => {
        setUserId(parseInt(event.target.value));
        setPage(1); // Reset to the first page when user changes
      }
      }
      value={userId}
     className='form-select mb-3'>
      <option value="">Select a post</option>
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select>
      <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>

    <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-primary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          className="btn btn-primary"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={ (posts?.length ?? 0) < POSTS_PER_PAGE} // Disable if no more posts
        >
          Next
        </button>
      </div>
    </>
  
  );
};

export default PostList;
