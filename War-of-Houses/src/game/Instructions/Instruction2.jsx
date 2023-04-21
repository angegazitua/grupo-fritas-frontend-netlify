
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './instructions.css';
import Board from '../Board.jsx';
import ImageCabanaRoja from '../../assets/img/cabana-roja.png'
import ImageEscobaRoja from '../../assets/img/escoba-roja.png'


function Instruction2() {
  const [isVisibleInst, setIsVisibleInst] = useState(true);
  const [isVisibleBoard, setIsVisibleBoard] = useState(false);

  function handleClick() {
    setIsVisibleInst(false);
    setIsVisibleBoard(true);
  }

  return (
    <main className="content-instruction">
        
        {isVisibleInst && <img src={ImageCabanaRoja} className='cabana-roja-instrucciones' alt="Imagen" />}
        {isVisibleInst && <img src={ImageEscobaRoja} className='escoba-roja-instrucciones' alt="Imagen" />}

        <h1 className="titulo-instrucciones">¿Quieres aprender a jugar <span className="name-instructions">War of Houses</span>?</h1>
        <div className="div-instrucciones">
            <div className="div-instrucciones-board">
              <div className='div-cabana-roja-tablero'>
                {isVisibleBoard && <img src={ImageCabanaRoja} className='cabana-roja-tablero' alt="Imagen" />}
              </div>
              <div className='div-escoba-roja-tablero'>
                {isVisibleBoard && <img src={ImageEscobaRoja} className='escoba-roja-tablero' alt="Imagen" />}
              </div>
                
              <Board />
                
            </div>
            <div className="div-instrucciones-text">
              <p className="parrafo-instrucciones">Empiezas la partida con 2 cabañas y 2 escobas. Cada cabaña vale 1 snitch dorada, así
                que ya empiezas con un total de 2 snitches doradas. El primer jugador que consiga 10 snitches doradas, gana la
                partida.</p>
              <br></br>
              <p className="parrafo-instrucciones"> ¿Quieres ver cómo se ve el inicio de la partida? ¡Apreta el botón! </p>
              <br></br>
              <br></br>
              <br></br>
              {isVisibleInst && 
              (<button className='back-button' onClick={handleClick}>Haz clic aquí</button>) }
              
              
            </div>
        </div>
        <div className="div-botones">
        <div className="div-boton">
        <Link className="back-button" to='/instruction1'>
            Back
        </Link>
        </div>
        <div className="div-boton">
        <Link className="next-button" to='/instruction3'>
            Next
        </Link>
        </div>
        </div>
    </main>
  )
}




export default Instruction2;