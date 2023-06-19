import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
    const [mail, setEmail] = useState('');
    const [contrasena, setPassword] = useState('');

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
                        type="mail"
                        name="mail"
                        value={mail}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="contrasena"
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