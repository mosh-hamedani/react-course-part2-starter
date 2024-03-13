import { useContext, useReducer, useState } from "react";
import authenticationReducer from "./reducers/authenticationReducer";
import AuthenticationContext from "./context/authenticationContext";

const LoginStatus = () => {
  const {username, authDispatch} = useContext(AuthenticationContext);

  if (username.length)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a onClick={() => authDispatch({type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => authDispatch({type: "LOGIN", username: "noel.dasco" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
