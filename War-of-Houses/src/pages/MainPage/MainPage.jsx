import React from "react";
import './main_page.css'

function MainPage() {
  return (
    <main className="main-main-page">
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
      <div className="content">
        <br></br>
        <h1>Ranking<h2 class="name">de nuestros jugadores</h2></h1>
          <table className="tabla">
          <tr>
            <th>Lugar</th>
            <th>Jugador</th>
            <th>Partidas Ganadas</th>
            <th>Partidas Perdidas</th>
            <th>Puntos totales</th>
          </tr>
          <tr>
            <td>1º</td>
            <td>Harry Potter</td>
            <td>51</td>
            <td>7</td>
            <td>44</td>
          </tr>
          <tr>
            <td>2º</td>
            <td>Hermione Granger</td>
            <td>50</td>
            <td>8</td>
            <td>42</td>
          </tr>
          <tr>
            <td>3º</td>
            <td>Ron Weasley</td>
            <td>74</td>
            <td>37</td>
            <td>37</td>
          </tr>
          <tr>
            <td>4º</td>
            <td>Hagrid</td>
            <td>23</td>
            <td>0</td>
            <td>23</td>
          </tr>
          <tr>
            <td>5º</td>
            <td>Professor McGonnagal</td>
            <td>29</td>
            <td>10</td>
            <td>19</td>
          </tr>
          </table>

      </div>
    </main>
  )
}

export default MainPage;