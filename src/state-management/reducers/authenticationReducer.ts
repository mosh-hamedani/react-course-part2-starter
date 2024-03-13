
interface LoginAction{
    type: "LOGIN" 
    username: string;
}

interface LogoutAction{
    type: "LOGOUT"
}

export type authAction = LoginAction | LogoutAction;

const authenticationReducer = (username: string, action: authAction): string =>{
    switch(action.type){
        case "LOGIN":
            return action.username;
        case "LOGOUT":
            return "";
    }
}

export default authenticationReducer;