import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user_id, setUserId] = useState(localStorage.getItem('user_id') || null);

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    useEffect(() => {
        localStorage.setItem('user_id', user_id);
    }, [user_id]);

    function logout() {
        setToken(null);
        setUserId(null);
    }

    return(
        <AuthContext.Provider value={{ token, setToken, logout, user_id, setUserId }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;