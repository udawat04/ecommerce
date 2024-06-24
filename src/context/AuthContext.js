import {  createContext , useContext , useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isAuthenticate , setAuthenticate] = useState(false);
    return(
        <AuthContext.Provider value = {{isAuthenticate,setAuthenticate}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = ()=>{
    return useContext(AuthContext);
}