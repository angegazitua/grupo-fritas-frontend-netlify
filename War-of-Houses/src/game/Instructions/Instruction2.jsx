import React from "react";
import { Link } from "react-router-dom";
import './instructions.css';
import Board from '../Board.jsx';

function Instruction2() {
  return (
    <main className="content-instruction">
        <h1 className="titulo-instrucciones">¿Quieres aprender a jugar <span className="name-instructions">War of Houses</span>?</h1>
        <div className="div-instrucciones">
            <div className="div-instrucciones-board">
                <Board />
            </div>
            <div className="div-instrucciones-text">
              <p>Empiezas la partida con 2 cabañas y 2 escobas. Cada cabaña vale 1 snitch dorada, así
                que ya empiezas con un total de 2 snitches doradas. El primer jugador que consiga 10 snitches doradas, gana la
                partida.</p>
              <br></br>
              <p> ¿Quieres ver cómo se ve el inicio de la partida? ¡Apreta el botón! </p>
            </div>
        </div>
        <div className="div-botones">
        <div className="div-boton">
        <Link className="back-button" to='/instruction1'>
            Back
        </Link>
        </div>
        <div className="div-boton">
        <Link className="next-button">
            Next
        </Link>
        </div>
        </div>
    </main>
  )
}




export default Instruction2;