import React from "react";
import { Link } from "react-router-dom";
import './instructions.css';
import Board from '../Board.jsx';

function Instruction1() {
  return (
    <main className="content-instruction">
        <h1 className="titulo-instrucciones-1">Welcome to the instructions of <span className="name-instructions">War of Houses</span></h1>
        <div className="div-instrucciones">
            <div className="div-instrucciones-board">
                <Board />
            </div>
            <div className="div-instrucciones-text">
              <p>Aca van las intrucciones escritas</p>
            </div>
        </div>
        <Link className="next-button" to='/instruction2'>
            Next
        </Link>
    </main>
  )
}

export default Instruction1;