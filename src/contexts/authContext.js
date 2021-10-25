import { createContext, useReducer } from "react";

const authValue = {
    isLogin : false,
    isAdmin : false
}

function reducer (state, action){
    localStorage.setItem('authValue', JSON.stringify(action));
    return{
        ...state, action
    }
}

export const AuthContext = createContext({});

function AuthContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, authValue);
    
    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;