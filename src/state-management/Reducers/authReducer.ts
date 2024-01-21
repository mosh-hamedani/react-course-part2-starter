interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;
const authReducer = (state: string, action: AuthAction) => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default authReducer;
