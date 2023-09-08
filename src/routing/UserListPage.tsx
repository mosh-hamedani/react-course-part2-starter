import { Link } from "react-router-dom";

const UserListPage = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <a href="#">{user.name}</a>
          </li>
        ))}
      </ul>
      <Link to="/">Back to main page</Link>
    </>
  );
};

export default UserListPage;
