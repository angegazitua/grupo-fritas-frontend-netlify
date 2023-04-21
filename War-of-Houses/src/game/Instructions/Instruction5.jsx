
import { Link } from "react-router-dom";
import './instructions.css';


function Instruction5() {
  return (
    <main className="content-instruction">
        <h1 className="titulo-instrucciones">¿Listo para jugar <span className="name-instructions">War of Houses</span>?</h1>
        <p className="parrafo-instrucciones" id="text-instruction-5"> ¡Apreta el botón para comenzar una partida!
        </p>

      <div className="div-botones">
        <div className="div-boton">
          <Link className="back-button" to='/instruction4'>
            Back
            </Link>
        </div>
        </div>
    </main>
  )
}

export default Instruction5;