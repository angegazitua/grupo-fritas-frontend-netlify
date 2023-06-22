import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { Link } from "react-router-dom";

function PartidasTabla() {
  const [partidas, setPartidas] = useState([]);
  const {user_id} = useContext(AuthContext);
  console.log('ACAAAAAAAA')
  console.log(user_id);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtener_partidas_usuario/${user_id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        const partidas = Object.keys(data).map((key) => data[key]);
        console.log(partidas);
  
        setPartidas(partidas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return (
    <div>
      {partidas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id partida</th>
              <th>Botón</th>
            </tr>
          </thead>
          <tbody>
            {partidas.map((partida) => (
              <tr key={partida.id}>
                <td>{partida.id}</td>
                <td>
                  <div className="div-boton-partida">
                    <Link className="partida-button" to='/partida'>
                      Ingresar a la partida
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Link className="crear-partida-button" to='/partida'>
          Crear partida
        </Link>
      )}
    </div>
  );
  
  
}

export default PartidasTabla;
