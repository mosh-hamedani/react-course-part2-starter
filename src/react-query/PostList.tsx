import { useId, useState } from "react";
import usePostLists from "./hooks/usePostList";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, isLoading, error } = usePostLists(userId);
  const userIdList: number[] = [1, 2, 3];

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <select
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
      </select>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
