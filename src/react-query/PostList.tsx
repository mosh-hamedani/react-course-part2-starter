import { useId, useState } from "react";
import usePostLists from "./hooks/usePostList";

const PostList = () => {
  const pageSize = 20;
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, error } = usePostLists({ page, pageSize });

  const [userId, setUserId] = useState<number>();
  const userIdList: number[] = [1, 2, 3];

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {/* <select
        className="form-select mb-3"
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
      >
        <option></option>
        {userIdList.map((id, index) => (
          <option key={index} value={id}>
            User {id}
          </option>
        ))}
      </select> */}

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
