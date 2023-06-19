import React, { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';


function Login() {
    const {token, setToken} = useContext(AuthContext);
    const [mail, setEmail] = useState('');
    const [contrasena, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("apretaste el form")
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/login`, 
        {
            mail, 
            contrasena
        }
        ).then((response) => {
            console.log(response);
            setError(false);
            setMsg('Login exitoso');
            // Guardar el token en el local storage
            const access_token = response.data.access_token;
            setToken(access_token);
            



        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="mail"
                        value={mail}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="contrasena"
                        value={contrasena}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />  
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Login;