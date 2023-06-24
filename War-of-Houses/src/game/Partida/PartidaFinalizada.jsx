
import { Link } from "react-router-dom";
import './partidafinalizada.css';


function PartidaFinalizada() {
  return (
    <main className="content-instruction-5">
        <div className="bg-container-5"></div>
        <div className="content-5">
        <h1 className="titulo-instrucciones">¿Listo para jugar <span className="name-instructions">War of Houses</span>?</h1>
        <p className="parrafo-instrucciones" id="text-instruction-5"> ¡Apreta el botón para comenzar una partida!
        </p>
            <Link className="play-button" to=" ">
                Comenzar partida
            </Link>
        </div>

    </main>
  )
}

export default PartidaFinalizada;