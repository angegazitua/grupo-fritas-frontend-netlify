import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Botón</th>
          </tr>
        </thead>
        <tbody>
          {partidas.map((partida) => (
            <tr key={partida.id}>
              <td>{partida.id}</td>
              <td>
                <button>Ingresar a la partida</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}

export default PartidasTabla;
