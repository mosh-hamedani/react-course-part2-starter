import { useContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import AuthContext from "../contexts/authContext";

const useAuth = () => useContext(AuthContext);
export default useAuth;
