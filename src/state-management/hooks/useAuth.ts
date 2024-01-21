import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
