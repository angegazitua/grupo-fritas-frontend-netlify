import React, {useContext, useState} from "react";
import './Login.css';
import { AuthContext } from "../auth/AuthContext";

const LogOutButton = () => {
    const {logout} = useContext(AuthContext);
    const [msg, setMsg] = useState('');

    const handleLogout = () => {
        logout();
        setMsg('Logout exitoso');
    };

    return (
        <>
        {msg.length > 0 && <div className="successMsg">{msg}</div>}
        <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
    )
}

export default LogOutButton;