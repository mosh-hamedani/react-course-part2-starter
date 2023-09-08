import { useNavigate } from "react-router-dom";
const UserDetailPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>user detail page</p>
      <button className="btn btn-primary" onClick={() => navigate("/users")}>
        Back to List
      </button>
    </>
  );
};

export default UserDetailPage;
