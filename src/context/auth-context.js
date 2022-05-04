import { createContext, useContext, useReducer } from "react";


const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext)

const AuthReducer = (state, {type, payload}) => {
    switch (type) {
        case 'EMAIL':
            return { ...state, email: payload}
            
        case 'PASSWORD':
            return { ...state, pasword: payload}
            
        case 'CONFIRM_PASSWORD':
            return { ...state, confirmPassword: payload}
            
        case 'FIRST_NAME':
            return { ...state, firstName: payload}
            
        case 'LAST_NAME':
            return { ...state, lastname: payload}
            
        default:
            return state;
    }
}

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(AuthReducer,{
        firstName: "",
        lastname: "",
        email: "",
        pasword: "",
        confirmPassword: "",
    });

    return(
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
}

export { useAuthContext, AuthProvider }