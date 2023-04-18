import React from "react";
import './main_page.css'

function MainPage() {
  return (
    <main className="content">
      <div className="bg-container-main-page"></div>
      <div className="content">
        <h1>¿Qué es <h2 class="name">War of Houses?</h2></h1>
        <p>War of Houses es un juego multijugador de gestión de recursos inspirado en el mítico 
                mundo de Harry Potter, en el cual las 4 casas de Howards, Griffindor, Slytherin, Ravenclaw 
                y Huffelpuf, deben competir entre sí. En el juego deberemos construir cabañas y escobas 
                que evolucionarán a castillos gracias a la gestión de cartas de recursos que iremos 
                acumulando en nuestra mano.</p>

        <p>La mecánica del juego es sencilla: tiramos los dados, recogemos los recursos que estos 
                hayan generado y finalmente construimos cabañas, escobas y castillos, siempre que 
                dispongamos de los recursos necesarios para poderlos construir. Ya ves que su 
                dinámica es sencilla y el objetivo del juego para ganar es conseguir tener 10 
                snitches doradas.</p>

      </div>
    </main>
  )
}

export default MainPage;