import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);


export const LoginProvider = ({ children }) => {
    const [loginDetails, setLoginDetails] = useState(null);

    return (
        <LoginContext.Provider value={[loginDetails, setLoginDetails]}>
            {children}
        </LoginContext.Provider>
    )
}