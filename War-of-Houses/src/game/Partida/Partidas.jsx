import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

function PartidasTabla() {
  const [partidas, setPartidas] = useState({});
  const {user_id} = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtener_partidas_usuario/${user_id}`)

      .then((response) => {
        const data = response.data;
        const partidas = {};
        data.Partidas.map((partida) => {
          partidas[partida.id] = partida;
        });

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
            {/* Agrega más encabezados de columnas según tus necesidades */}
          </tr>
        </thead>
        <tbody>
          {Object.values(partidas).map((partida) => (
            <tr key={partida.id}>
              <td>{partida.id}</td>
              {/* Agrega más celdas según las propiedades de tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PartidasTabla;
