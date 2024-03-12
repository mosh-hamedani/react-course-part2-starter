
interface Action{
    type: "LOGIN" | "LOGOUT"
    username?: string;
}


const authenticationReducer = (username: string, action: Action): string =>{
    console.log(action)

    switch(action.type){
        case "LOGIN":
            return action.username || "";
        case "LOGOUT":
            return "";
    }
    return username;
}

export default authenticationReducer;