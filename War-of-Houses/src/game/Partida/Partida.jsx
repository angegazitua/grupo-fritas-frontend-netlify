import axios from 'axios';
// https://www.npmjs.com/package/react-hexgrid?activeTab=readme

import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex} from 'react-hexgrid';
import './partida.css'
import Image1 from '../../assets/img/bosque_prohibido.jpg'
import Image2 from '../../assets/img/cabaña_hagrid.jpg'
import Image3 from '../../assets/img/chamber.png'
import Image4 from '../../assets/img/diagonal_alley.jpg'
import Image5 from '../../assets/img/oficina_dumbledore.jpg'
import Image6 from '../../assets/img/cabana-roja.png'
import Image7 from '../../assets/img/logo_howards.png'
import CartaDragon from '../../assets/img/huevo-dragon.jpg'
import CartaPhoenix from '../../assets/img/pluma-pheonix.jpg';
import CartaUnicornio from '../../assets/img/pelo-unicornio.jpg';
import CartaVarita from '../../assets/img/varita-magica.jpg';
import CartaSerpiente from '../../assets/img/diente-serpiente.jpg';

function Partida () {
    const hexagonSize = { x: 18, y: 10 };
    const hexagonSize3 = { x: 10, y: 10 };
    return (
    
      <div className="div-partida">

        <div className='div-izquierdo-partida'>
          <h1>Puntajes jugadores</h1>
          <p>Griffindor: </p>
          <p>Ravenclaw: </p>
          <p>Slytherin: </p>
          <p>Huffelpuff: </p>
          <div class="cartas">
            <img className='carta-dragon' src={CartaDragon}></img>
            <img className='carta-phoenix' src={CartaPhoenix}></img>
            <img className='carta-unicornio' src={CartaUnicornio}></img>
            <img className='carta-varita' src={CartaVarita}></img>
            <img className='carta-serpiente' src={CartaSerpiente}></img>
          </div>
        </div>

        <div className='div-board-partida'>
          {/* <img src={Image6} id='cabana'></img> */}
          <HexGrid width={1000} height={800} viewBox="-50 -50 100 100">  {/* aca se cambia el tamaño del board */}
            {/* Grid with manually inserted hexagons */}
            <Layout size={{ x: 9, y: 9 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
              <Hexagon q={0} r={0} s={0} fill = 'pat-logo'>
              </Hexagon>
              <Hexagon q={0} r={1} s={-1} fill = 'pat-2' onClick={() => alert("hola")}>
                <Text>10</Text>
              </Hexagon>
              <Hexagon q={1} r={0} s={-1} fill = 'pat-3'>
                <Text>8</Text> 
              </Hexagon>
              <Hexagon q={1} r={-1} s={0} fill = 'pat-4'>
                <Text>4</Text>
                </Hexagon>
              <Hexagon q={0} r={-1} s={1} fill = 'pat-5'>
                <Text>5</Text>
                </Hexagon>
              <Hexagon q={-1} r={0} s={1} fill = 'pat-1'>
                <Text>6</Text>
                </Hexagon>
              <Hexagon q={-1} r={1} s={0} fill = 'pat-2'>
                <Text>9</Text>
                </Hexagon>
              <Hexagon q={-2} r={0} s={1} fill = 'pat-3'>
                <Text>2</Text>
                </Hexagon>
              <Hexagon q={0} r={2} s={-2} fill = 'pat-4'>
                <Text>6</Text>
                </Hexagon>
              <Hexagon q={1} r={1} s={-2} fill = 'pat-5'>
                <Text>9</Text>
                </Hexagon>
              <Hexagon q={2} r={0} s={-2} fill = 'pat-1'>
                <Text>5</Text>
                </Hexagon>
              <Hexagon q={2} r={-1} s={-1} fill = 'pat-2' >
                <Text>10</Text>
                </Hexagon>
              <Hexagon q={2} r={-2} s={0} fill = 'pat-3'>
                <Text>8</Text>
                </Hexagon>
              <Hexagon q={1} r={-2} s={1} fill = 'pat-4'>
                <Text>12</Text>
                </Hexagon>
              <Hexagon q={0} r={-2} s={2} fill = 'pat-5'>
                <Text>11</Text>
                </Hexagon>
              <Hexagon q={-1} r={-1} s={2} fill = 'pat-1'>
                <Text>3</Text>
                </Hexagon>
              <Hexagon q={-2} r={1} s={1} fill = 'pat-3'>
                <Text>3</Text>
                </Hexagon>
              <Hexagon q={-2} r={2} s={0} fill = 'pat-4'>
                <Text>4</Text>  
                </Hexagon>
              <Hexagon q={-1} r={2} s={-1} fill = 'pat-5'>
                <Text>11</Text>
                </Hexagon>


            </Layout>

            <Layout size={{ x: 3, y: 3 }} flat={true} spacing={1.01} origin={{ x: 0, y: 0 }}>
                <Hexagon q={0} r={0} s={0} fill = 'pat-logo' class="hexagon-button">
                </Hexagon>
                <Hexagon q={0} r={-1} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={-1} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={0} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={0} r={1} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={1} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={0} s={1} fill = 'pat-logo'>
                </Hexagon>
                {/* Segunda vuelta */}
                <Hexagon q={0} r={-2} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={-2} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={-2} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={-1} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={0} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={1} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={0} r={2} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={2} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={2} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={1} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={0} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={-1} s={2} fill = 'pat-logo'>
                </Hexagon>
                {/* Tercera vuelta */}
                <Hexagon q={0} r={-3} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={-3} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={-3} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={-3} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={-2} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={-1} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={0} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={1} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={2} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={0} r={3} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={3} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={3} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={3} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={2} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={1} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={0} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={-1} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={-2} s={3} fill = 'pat-logo'>
                </Hexagon>
                {/* Cuarta vuelta */}
                <Hexagon q={0} r={-4} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={-4} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={-4} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={-4} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-4} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-3} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-2} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-1} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={0} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={1} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={2} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={3} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={0} r={4} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={4} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={4} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={4} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={4} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={3} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={2} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={1} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={0} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={-1} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={-2} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={-3} s={4} fill = 'pat-logo'>
                </Hexagon>
                {/* Quinta vuelta */}
                <Hexagon q={0} r={-5} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={-5} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={-5} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={-5} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-5} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-5} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-4} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-3} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-2} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-1} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={0} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={1} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={2} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={3} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={4} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={0} r={5} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={5} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={5} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={5} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={5} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={5} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={4} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={3} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={2} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={1} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={0} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={-1} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={-2} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={-3} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={-4} s={5} fill = 'pat-logo'>
                </Hexagon>
                {/* Sexta vuelta */}
                <Hexagon q={0} r={-6} s={6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={-6} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={-6} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={-6} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-6} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-6} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={6} r={-6} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={6} r={-5} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={6} r={-4} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={6} r={-3} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={6} r={-2} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={6} r={-1} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={6} r={0} s={-6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={1} s={-6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={2} s={-6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={3} r={3} s={-6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={4} s={-6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={5} s={-6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={0} r={6} s={-6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={6} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={6} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={6} s={-3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={6} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={6} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-6} r={6} s={0} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-6} r={5} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-6} r={4} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-6} r={3} s={3} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-6} r={2} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-6} r={1} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-6} r={0} s={6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={-1} s={6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={-2} s={6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-3} r={-3} s={6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={-4} s={6} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={-5} s={6} fill = 'pat-logo'>
                </Hexagon>






                
                    


              
            </Layout>

            {/* <Pattern id="pat-1" link={Image1} size={hexagonSize}/>
            <Pattern id="pat-2" link={Image2} size={hexagonSize}/>
            <Pattern id="pat-3" link={Image3} size={hexagonSize3}/>
            <Pattern id="pat-4" link={Image4} size={hexagonSize}/>
            <Pattern id="pat-5" link={Image5} size={hexagonSize}/>
            <Pattern id="pat-cabaña" link={Image6}/>
            <Pattern id="pat-logo" link={Image7}/> */}

          </HexGrid>
          
        </div>

        <div className='div-derecho-partida'>
          <button className="button-partida" id="button-lanzar">Lanzar Dados</button>
          <br></br>
          <p>Resultado dados: </p>
          <br></br>
          <button className="button-partida" id="button-escoba">Comprar Escoba</button>
          <br></br>
          <button className="button-partida" id="button-cabana">Comprar Cabana</button>
          <br></br>
          <button className="button-partida" id="button-castillo">Comprar Castillo</button>
          <br></br>
          <button className="button-partida" id="button-finalizar">Finalizar Turno</button>
        </div>
      
      </div>
   
    );
}

export default Partida;

