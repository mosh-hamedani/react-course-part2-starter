import usePosts from "./hooks/usePosts";
import { useState } from "react";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <select
        className="form-select mb-3"
        //I got the compilation error that said "Argument of type 'string' is not assignable to parameter of type 'SetStateAction number | undefined'." It happened because the value is string but userId is number. So I only should use parseInt to transform it to number type.
        onChange={(event) => setUserId(parseInt(event.target.value))}
        // I also should set value prop to userId to have single source of truth
        value={userId}
      >
        <option value="" key=""></option>
        <option value="1" key="">
          User 1
        </option>
        <option value="2" key="">
          User 2
        </option>
        <option value="3" key="">
          User 3
        </option>
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
