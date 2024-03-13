import React, { ReactNode, useReducer } from 'react'
import authenticationReducer from './reducers/authenticationReducer';
import AuthenticationContext from './context/authenticationContext';

interface Props{
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    const [username, dispatch]  = useReducer(authenticationReducer, "");

    return (
        <AuthenticationContext.Provider value={{username, dispatch}}>
            {children}
        </AuthenticationContext.Provider>        
    )
}

export default AuthProvider