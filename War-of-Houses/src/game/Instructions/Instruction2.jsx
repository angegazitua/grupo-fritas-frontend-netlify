import React from "react";
import { Link } from "react-router-dom";
//import './instructions.css';
import Board from '../Board.jsx';

function Instruction2() {
  return (
    <main className="content-instruction">
        <h1>Welcome to the instructions of <span className="name-instructions">War of Houses</span></h1>
        <div className="div-instrucciones">
            <div className="div-instrucciones-board">
                <Board />
            </div>
            <div className="div-instrucciones-text">
              <p>Aca van las intrucciones escritas</p>
            </div>
        </div>
        <Link className="back-button" to='/instruction1'>
            Back
        </Link>
        <Link className="next-button">
            Next
        </Link>
    </main>
  )
}




export default Instruction2;