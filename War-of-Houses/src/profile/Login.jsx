import React, { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';


function Login() {
    const {token, setToken} = useContext(AuthContext);
    const {user_id, setUserId} = useContext(AuthContext);
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
            const user_id = response.data.user_id;
            setToken(access_token);
            setUserId(user_id);
            

        }).catch((error) => {
            console.log(error);
            setMsg('credenciales incorrectas');
        });
    };

    return (
        <div className="Login">
            <h1>¡Bienvenido! Inicia tu sesión a continuación</h1> 

            <p>{msg}</p>
            
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