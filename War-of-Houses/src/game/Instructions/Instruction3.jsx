
import ImageCabanaRoja from '../../assets/img/cabana-de-madera_rojo.png';
import ImageEscobaRoja1 from '../../assets/img/escoba-roja.png'
import ImageEscobaRoja2 from '../../assets/img/escoba-roja.png'

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './instructions.css';
import Board from '../Board.jsx';

function Instruction3() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const images = [ ImageCabanaRoja, ImageEscobaRoja1, ImageEscobaRoja2 ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible1(true);
    }, 1000);
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (isVisible1) {
      const timerId = setTimeout(() => {
        setIsVisible2(true);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [isVisible1]);

  useEffect(() => {
    if (isVisible2) {
      const timerId = setTimeout(() => {
        setIsVisible3(true);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [isVisible2]);

  return (
    <main className="content-instruction">
      <div className="img-container">
        {isVisible1 && <img src={images[0]} className='cabana-roja-tablero' alt="Imagen" />}
        {isVisible2 && <img src={images[1]} className='escoba-roja-tablero' alt="Imagen" id='escoba-roja-tablero-1' />}
        {isVisible3 && <img src={images[2]} className='escoba-roja-tablero' alt="Imagen" id='escoba-roja-tablero-2' />}
      </div>
      <h1 className="titulo-instrucciones">¿Quieres aprender a jugar <span className="name-instructions">War of Houses</span>?</h1>
      <div className="div-instrucciones">
        <div className="div-instrucciones-board">
          <Board />
        </div>
        <div className="div-instrucciones-text">
          <p>Empiezas la partida con 2 cabañas y 2 escobas. Cada cabaña vale 1 snitch dorada, así que ya empiezas con un total de 2 snitches doradas. El primer jugador que consiga 10 snitches doradas, gana la partida.</p>
          <br></br>
          <p> ¿Quieres ver cómo se ve el inicio de la partida? ¡Apreta el botón! </p>
        </div>
      </div>
      <div className="div-botones">
        <div className="div-boton">
          <Link className="back-button" to='/instruction2'>
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

export default Instruction3;
