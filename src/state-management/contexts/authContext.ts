import { createContext } from "react";
import { AuthAction } from "../Reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
