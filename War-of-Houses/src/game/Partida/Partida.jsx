import axios from 'axios';
import { useLocation } from "react-router-dom";
// https://www.npmjs.com/package/react-hexgrid?activeTab=readme
import React, {createContext, useState, useEffect} from "react";
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
import CabanaRoja from '../../assets/img/cabana-roja.png';
// import CabanaVerde from '../../assets/img/cabana-verde.png';
import CabanaAzul from '../../assets/img/cabana-azul.png';
// import CabanaAmarilla from '../../assets/img/cabana-amarilla.png';
import CastilloRojo from '../../assets/img/castillo-rojo.png';
// import CastilloVerde from '../../assets/img/castillo-verde.png';
import CastilloAzul from '../../assets/img/castillo-azul.png';
// import CastilloAmarillo from '../../assets/img/castillo-amarillo.png';

function Partida () {
    const hexagonSize = { x: 18, y: 10 };
    const hexagonSize3 = { x: 10, y: 10 };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idPartida = searchParams.get("idPartida");

    let foto_pos = {'foto_pos_1_2_5': null, 'foto_pos_1_3_5': null, 'foto_pos_2_4_7': null,
      'foto_pos_2_5_7': null, 'foto_pos_3_5_8': null, 'foto_pos_3_6_8': null,
      'foto_pos_4_7_9': null, 'foto_pos_5_7_10': null, 'foto_pos_5_8_10': null,
      'foto_pos_6_8_11': null, 'foto_pos_7_9_12': null, 'foto_pos_7_10_12': null,
      'foto_pos_8_10_13': null, 'foto_pos_8_11_13': null, 'foto_pos_9_12_14': null,
      'foto_pos_10_12_15': null, 'foto_pos_10_13_15': null, 'foto_pos_11_13_16': null,
      'foto_pos_12_14_17': null, 'foto_pos_12_15_17': null, 'foto_pos_13_15_18': null,
      'foto_pos_13_16_18': null, 'foto_pos_15_17_19': null, 'foto_pos_15_18_19': null
  };

    useEffect(() => {
      cargarPartida();
      // Hacer que cambie cada vez que cambie jugador actual
    }, []);
  
    const cargarPartida = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/estado_partida/${idPartida}`)
        .then((response) => {
          console.log(response.data);
          const cabanas_rojas = response.data["jugador_1"]["cabanas"];
          console.log(cabanas_rojas);
          Object.keys(cabanas_rojas).forEach((key) => {
            const pos = cabanas_rojas[key]["posicion"].split(",").join("_");
            console.log(pos);
            foto_pos[`foto_pos_${pos}`] = "pat-cabana-roja";
            // poner en hexagono como fill = {foto_pos['foto_pos_1_2_5']}
          });



          const cabanas_verdes = response.data["jugador_2"]["cabanas"];
          const cabanas_azules = response.data["jugador_3"]["cabanas"];
          const cabanas_amarillas = response.data["jugador_4"]["cabanas"];

          const castillos_rojos = response.data["jugador_1"]["castillos"];
          const castillos_verdes = response.data["jugador_2"]["castillos"];
          const castillos_azules = response.data["jugador_3"]["castillos"];
          const castillos_amarillos = response.data["jugador_4"]["castillos"];


          const foto_pos_1_2_5 = 'pat-castillo-rojo';

        })
        .catch((error) => {
          console.log(error);
        });
    };

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
                {/* Segunda vuelta */}
                <Hexagon q={1} r={-2} s={1} className = 'hexagon_125' fill = 'pat-cabana-roja' onClick={() => alert("hola")}>
                </Hexagon>
                <Hexagon q={2} r={-1} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={1} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={2} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={1} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={-1} s={2} fill = 'pat-logo'>
                </Hexagon>
                {/* Tercera vuelta */}
                {/* Cuarta vuelta */}
                <Hexagon q={2} r={-4} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-2} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={2} r={2} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={4} s={-2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={2} s={2} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-2} r={-2} s={4} fill = 'pat-logo'>
                </Hexagon>
                {/* Quinta vuelta */}
                <Hexagon q={1} r={-5} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={-5} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-4} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={5} r={-1} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={4} r={1} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={1} r={4} s={-5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={5} s={-4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={5} s={-1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={4} s={1} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-5} r={1} s={4} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-4} r={-1} s={5} fill = 'pat-logo'>
                </Hexagon>
                <Hexagon q={-1} r={-4} s={5} fill = 'pat-logo'>
                </Hexagon>
                {/* Sexta vuelta */}
              



                {/* <Path start={{ q: 0, r: 0, s: 0 }} end={{ q: 0, r: 0, s: 1 }} /> */}
                {/* <Path start={new Hex(-1, -1, 2)} end={new Hex(1, -2, 1)} /> */}
                

                {/* <StraightPath start={{ q: 0, r: 0, s: 0 }} end={{ q: 0, r: 0, s: 1 }} /> */}
                {/* <StraightPath start={new Hex(-1, -1, 2)} end={new Hex(1, -2, 1)} /> */}

                {/* <StraightPath start={{ q: 0, r: 0, s: 0 }} end={{ q: 1, r: 0, s: 0 }} /> */}


              
            </Layout>

            {/* Patterns de terreno */}
            <Pattern id="pat-1" link={Image1} size={hexagonSize}/>
            <Pattern id="pat-2" link={Image2} size={hexagonSize}/>
            <Pattern id="pat-3" link={Image3} size={hexagonSize3}/>
            <Pattern id="pat-4" link={Image4} size={hexagonSize}/>
            <Pattern id="pat-5" link={Image5} size={hexagonSize}/>
            <Pattern id="pat-logo" link={Image7}/>

            {/* Patterns de cabanas */}
            <Pattern id="pat-cabana-roja" link={CabanaRoja} size={{x:1.8, y:1.8}}/>
            {/* <Pattern id="pat-cabana-verde" link={CabanaVerde} size={{x:1.8, y:1.8}}/> */}
            <Pattern id="pat-cabana-azul" link={CabanaAzul} size={{x:1.8, y:1.8}}/>
            {/* <Pattern id="pat-cabana-amarilla" link={CabanaAmarilla} size={{x:1.8, y:1.8}}/> */}

            {/* Patterns de castillos */}
            <Pattern id="pat-castillo-rojo" link={CastilloRojo} size={{x:1.8, y:1.8}}/>
            {/* <Pattern id="pat-castillo-verde" link={CastilloVerde} size={{x:1.8, y:1.8}}/> */}
            <Pattern id="pat-castillo-azul" link={CastilloAzul} size={{x:1.8, y:1.8}}/>
            {/* <Pattern id="pat-castillo-amarillo" link={CastilloAmarillo} size={{x:1.8, y:1.8}}/> */}


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

    // Obtén una referencia al elemento
    var hexagonElement = document.getElementById('hexagon_125');

    // Oculta el hexágono
    hexagonElement.style.display = 'none';
}

export default Partida;

