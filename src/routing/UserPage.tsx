import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";

const UserPage = () => {
  const { user } = useAuth();
  console.log("user is:", user);
  // Very important thing about the concept behind useEffect hook.
  // If user doesn't exist, I want to redirect the user to the login page. I cannot use Navigate function, because it has side effect. It updates the url in the browser. So I can not call it during the render phase, because otherwise this component will no longer be a pure component. So we should call the navigate function inside an Event handlers or inside an effect. But here I don't want have a effect because that effect will run after the render phase. So we do not want to render the page and then redirect the user. DOES NOT MAKE SENSE. So I should return a Navigate component which is a wrapper around the navigation function.
  if (!user) return <Navigate to="/login" />;
  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
