
import ImageCabanaRoja from '../../assets/img/cabana-roja.png';
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
          <p>Para conseguir más puntos de victoria tienes que construir
          nuevas escobas y cabañas, y ampliar tus cabañas a castillos.
          Un castillo vale 2 snitches doradas. Pero, para construir, necesitas
          materias primas.</p>
          <br></br>
          <p> En el tablero se puede ver como se van constuyendo las escobas, cabañas y castillos. </p>
          <br></br>  
          <p>¿Cómo consigues las materias primas? Muy sencillo: en cada turno se
              determina el terreno que va a producir. Esto se hace tirando dos dados. En
              cada terreno hay un número. Si por ejemplo, la suma de los dados es un “4”, todos los terrenos marcados con un 
              “4” producirán. En la ilustración de la derecha sería Diagonal Alley (que produciría baritas).</p>
          <br></br> 
          <p>Sólo consiguen materias primas los jugadores que tengan una cabaña o un castillo
              adyacentes a estos terrenos. En la ilustración la cabaña roja está adyacente a
              un Diagonal Alley y a la casa de Hagrid. el resultado de la tirada es un 4, el jugador rojo recibirá 1 barita 
              y un huevo de dragón.</p> 
          <br></br> 
          <p>Lo ideal es que la mayoría de las cabañas o castillos estén adyacentes a varios
              terrenos (el máximo posible es 3). De esta forma, podrán conseguir, según
              el resultado de los dados, diferentes materias primas.</p>
          <br></br> 
          <p>Puedes construir una cabaña nueva en una encrucijada
            que esté libre, con la condición de que una de tus propias
            escobas lleve hasta ella y que la cabaña/castillo más cercano esté,
            como mínimo, a dos encrucijadas de distancia.</p>
        </div>
      </div>
      <div className="div-botones">
        <div className="div-boton">
          <Link className="back-button" to='/instruction2'>
            Back
            </Link>
          </div>
          <div className="div-boton">
            <Link className="next-button" to='/instruction4'>
              Next
            </Link>
          </div>
        </div>
    </main>
  )
}

export default Instruction3;
