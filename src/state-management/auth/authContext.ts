import { createContext } from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContextType {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
