import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import { Link } from "react-router-dom";
import './partidas.css';

function PartidasTabla() {
  const [partidas, setPartidas] = useState([]);
  const { user_id } = useContext(AuthContext);
  
  useEffect(() => {
    cargarPartidas();

    // Agregamos user_id como dependencia para que se ejecute el efecto cada vez que user_id cambie
  }, [user_id]);

  const cargarPartidas = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/obtener_partidas_usuario/${user_id}`)
      .then((response) => {
        const data = response.data;
        const partidas = Object.keys(data).map((key) => data[key]);
        setPartidas(partidas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCrearPartida = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/iniciar_partida`, {
        idUsuario: user_id
      })
      .then((response) => {
        console.log(response.data);
        const idPartida = response.data.idPartida;
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/asignar_turnos`, {
          idPartida: idPartida
        })
        .then((response) => {
          console.log("ASIGNAR TURNOS");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
        cargarPartidas(); // Actualizamos las partidas después de crear una nueva partida
      })
      .catch((error) => {
        console.log(error);
      });
    
    
    
  };

  return (
    <main className='content'>
    <div className='bg-container-partidas'></div>
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
                  {partida.cantJugadores === 4 && partida.ganador === null ? (
                    <Link className="partida-button" to={`/partida?idPartida=${partida.id}`}>
                      Ingresar a la partida
                    </Link>
                  ) : (
                    <span>
                      {partida.cantJugadores !== 4
                        ? "La partida no tiene 4 jugadores"
                        : "La partida ha sido finalizada"}
                    </span>
                  )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <Link className="crear-partida-button" onClick={handleCrearPartida}>
        Ingresar a una nueva partida
      </Link>
    </div>
    </main>
  );
}

export default PartidasTabla;