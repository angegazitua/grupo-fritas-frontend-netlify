import axios from 'axios';
import { useLocation } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
// https://www.npmjs.com/package/react-hexgrid?activeTab=readme
import React, {createContext, useState, useEffect, useContext} from "react";
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
import CabanaRoja from '../../assets/img/cabana-roja-grande.png';
//import CabanaVerde from '../../assets/img/cabana-verde.png';
import CabanaAzul from '../../assets/img/cabana-azul-grande.png';
// import CabanaAmarilla from '../../assets/img/cabana-amarilla.png';
import CastilloRojo from '../../assets/img/castillo-rojo-grande.png';
// import CastilloVerde from '../../assets/img/castillo-verde.png';
import CastilloAzul from '../../assets/img/castillo-azul.png';
// import CastilloAmarillo from '../../assets/img/castillo-amarillo.png';
import EscobaRojaRecto from '../../assets/img/escoba-roja-recto.png';
import EscobaRojaDerecha from '../../assets/img/escoba-roja-derecha.png';
import EscobaRojaIzquierda from '../../assets/img/escoba-roja-izquierda.png';
import EscobaAzulRecto from '../../assets/img/escoba-azul-recta.png';
import EscobaAzulDerecha from '../../assets/img/escoba-azul-derecha.png';
import EscobaAzulIzquierda from '../../assets/img/escoba-azul-izquierda.png';
import EscobaVerdeRecto from '../../assets/img/escoba-verde-recto.png';
import EscobaVerdeDerecha from '../../assets/img/escoba-verde-derecha.png';
import EscobaVerdeIzquierda from '../../assets/img/escoba-verde-izquierda.png';
import EscobaAmarillaRecto from '../../assets/img/escoba-amarilla-recto.png';
import EscobaAmarillaDerecha from '../../assets/img/escoba-amarilla-derecha.png';
import EscobaAmarillaIzquierda from '../../assets/img/escoba-amarilla-izquierda.png';

function Partida () {
    const hexagonSize = { x: 18, y: 10 };
    const hexagonSize3 = { x: 10, y: 10 };
    let [queQuiereComprar, setQueQuiereComprar] = useState("");
    let [puedeComprar, setPuedeComprar] = useState(false);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idPartida = searchParams.get("idPartida");

    const { user_id } = useContext(AuthContext);

    const [fotoPos, setFotoPos] = useState(
      {'foto_pos_1_2_5': 'pat-logo', 'foto_pos_1_3_5': 'pat-logo', 'foto_pos_2_4_7': 'pat-logo',
      'foto_pos_2_5_7': 'pat-logo', 'foto_pos_3_5_8': 'pat-logo', 'foto_pos_3_6_8': 'pat-logo',
      'foto_pos_4_7_9': 'pat-logo', 'foto_pos_5_7_10': 'pat-logo', 'foto_pos_5_8_10': 'pat-logo',
      'foto_pos_6_8_11': 'pat-logo', 'foto_pos_7_9_12': 'pat-logo', 'foto_pos_7_10_12': 'pat-logo',
      'foto_pos_8_10_13': 'pat-logo', 'foto_pos_8_11_13': 'pat-logo', 'foto_pos_9_12_14': 'pat-logo',
      'foto_pos_10_12_15': 'pat-logo', 'foto_pos_10_13_15': 'pat-logo', 'foto_pos_11_13_16': 'pat-logo',
      'foto_pos_12_14_17': 'pat-logo', 'foto_pos_12_15_17': 'pat-logo', 'foto_pos_13_15_18': 'pat-logo',
      'foto_pos_13_16_18': 'pat-logo', 'foto_pos_15_17_19': 'pat-logo', 'foto_pos_15_18_19': 'pat-logo'
      }
    );
    const [jugador, setJugador] = useState([]);

    useEffect(() => {
      cargarPartida();
    }, []);

    useEffect(() => {
      obtenerJugador();
      // Agregamos user_id como dependencia para que se ejecute el efecto cada vez que user_id cambie
    }, [user_id]);
  
    const cargarPartida = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/estado_partida/${idPartida}`)
        .then((response) => {
          console.log(response.data);
          console.log(response.data["jugador_rojo"]["cabanas"]);
          const cabanas_rojas = response.data["jugador_rojo"]["cabanas"];
          console.log(cabanas_rojas);
          Object.keys(cabanas_rojas).forEach((key) => {
            const pos = cabanas_rojas[key]["posicion"].split(",").join("_");
            console.log(pos);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos}`]: 'pat-cabana-roja'
            }));
            // setFotoPos({...fotoPos, [`foto_pos_${pos}`]: 'pat-cabana-roja'});
            //fotoPos[`foto_pos_${pos}`] = 'pat-cabana-roja';
            // // poner en hexagono como fill = {foto_pos['foto_pos_1_2_5']}
            // foto_pos['foto_pos_1_2_5'] = 'pat-cabana-roja';
            
            
          });


          const cabanas_verdes = response.data["jugador_verde"]["cabanas"];
          console.log(cabanas_verdes);
          Object.keys(cabanas_verdes).forEach((key) => {
            const pos_verde = cabanas_verdes[key]["posicion"].split(",").join("_");
            console.log(pos_verde);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_verde}`]: 'pat-cabana-verde'
            }));
          });

          const cabanas_azules = response.data["jugador_azul"]["cabanas"];
          console.log(cabanas_azules);
          Object.keys(cabanas_azules).forEach((key) => {
            const pos_azul = cabanas_azules[key]["posicion"].split(",").join("_");
            console.log(pos_azul);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_azul}`]: 'pat-cabana-azul'
            }));
            //setFotoPos({...fotoPos, [`foto_pos_${pos_azul}`]: 'pat-cabana-azul'});
            //fotoPos[`foto_pos_${pos_azul}`] = 'pat-cabana-azul';
            // // poner en hexagono como fill = {foto_pos['foto_pos_1_2_5']}
            // foto_pos['foto_pos_1_2_5'] = 'pat-cabana-roja';
            
            
          });
          const cabanas_amarillas = response.data["jugador_amarillo"]["cabanas"];
          console.log(cabanas_amarillas);
          Object.keys(cabanas_amarillas).forEach((key) => {
            const pos_amarilla = cabanas_amarillas[key]["posicion"].split(",").join("_");
            console.log(pos_amarilla);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_amarilla}`]: 'pat-cabana-amarilla'
            }));
          });

          const castillos_rojos = response.data["jugador_rojo"]["castillos"];
          console.log(castillos_rojos);
          Object.keys(castillos_rojos).forEach((key) => {
            const pos_castillo_rojo = castillos_rojos[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_rojo);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_rojo}`]: 'pat-castillo-rojo'
            }));
          });
          
          const castillos_verdes = response.data["jugador_verde"]["castillos"];
          console.log(castillos_verdes);
          Object.keys(castillos_verdes).forEach((key) => {
            const pos_castillo_verde = castillos_verdes[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_verde);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_verde}`]: 'pat-castillo-verde'
            }));
          });


          const castillos_azules = response.data["jugador_azul"]["castillos"];
          console.log(castillos_azules);
          Object.keys(castillos_azules).forEach((key) => {
            const pos_castillo_azul = castillos_azules[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_azul);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_azul}`]: 'pat-castillo-azul'
            }));
          });


          const castillos_amarillos = response.data["jugador_amarillo"]["castillos"];
          console.log(castillos_amarillos);
          Object.keys(castillos_amarillos).forEach((key) => {
            const pos_castillo_amarillo = castillos_amarillos[key]["posicion"].split(",").join("_");
            console.log(pos_castillo_amarillo);
            setFotoPos(fotoPos => ({
              ...fotoPos,
              [`foto_pos_${pos_castillo_amarillo}`]: 'pat-castillo-amarillo'
            }));
          });


        })
        .catch((error) => {
          console.log(error);
        });
    };

    const obtenerJugador = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/obtener_id_jugador/${idPartida}/${user_id}`)
        .then((response) => {
          const jugador = response.data;
          console.log(jugador);
          setJugador(jugador);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleBotonComprarCabana = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/comprar_cabana/${jugador}`)
        .then((response) => {
          console.log(response.data);
          if (response.data["bool"]) {
            console.log("MIRAR ACA")
            console.log(queQuiereComprar);
            console.log(puedeComprar);
            setQueQuiereComprar("cabana");
            setPuedeComprar(true);
            console.log(queQuiereComprar);
            console.log(puedeComprar);
          }
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleBotonComprarCastillo = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/comprar_castillo/${jugador}`)
        .then((response) => {
          console.log(response.data);
          if (response.data["bool"]) {
            setQueQuiereComprar("castillo");
            setPuedeComprar(true);
          }
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleComprar = (pos) => {
      console.log(pos);
      console.log("Intentando comprar");
      console.log(puedeComprar);

      if (puedeComprar) {
        if (queQuiereComprar === "cabana") {
          console.log("Comprar cabaña");
          handleComprarCabana(pos);
        } else if (queQuiereComprar === "castillo") {
          console.log("Comprar castillo");
          handleComprarCastillo(pos);
        }
      }
      
    };

    const handleComprarCabana = (pos) => {
      console.log("ACAAAAAAAAAA")
      console.log(pos);
      const lista_pos = pos.split("_");
      console.log(lista_pos);
      console.log(jugador);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/guardar_cabana`, {
          idJugador: jugador,
          posicion1: lista_pos[0],
          posicion2: lista_pos[1],
          posicion3: lista_pos[2]
        })
        .then((response) => {
          console.log(response.data);
          console.log("hola Holaaaaaa")
          setQueQuiereComprar(null);
          setPuedeComprar(false);
          console.log(queQuiereComprar);
          console.log(puedeComprar);
          console.log("chao Chaooooo")
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          console.log(error);
          setQueQuiereComprar(null);
          setPuedeComprar(false);
          console.log(queQuiereComprar);
          console.log(puedeComprar);
        });
      
    };

    const handleComprarCastillo = (pos) => {
      const lista_pos = pos.split("_");
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/guardar_castillo`, {
          idJugador: jugador,
          posicion1: lista_pos[0],
          posicion2: lista_pos[1],
          posicion3: lista_pos[2]
        })
        .then((response) => {
          console.log(response.data);
          cargarPartida(); // Actualizamos las partidas después de crear una nueva partida
        })
        .catch((error) => {
          console.log(error);
        });
      setQueQuiereComprar(null);
      setPuedeComprar(false);
    };

    return (
    
      <div className="div-partida">

        <div className='div-izquierdo-partida'>
          <h1>Puntajes jugadores</h1>
          <p>Griffindor: </p>
          <p>Ravenclaw: </p>
          <p>Slytherin: </p>
          <p>Huffelpuff: </p>
          <div className="cartas">
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
              <Hexagon q={0} r={1} s={-1} fill = 'pat-2'>
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
                {/* Escobas primera vuelta */}
                <Hexagon q={0} r={-1.5} s={1.5} fill = 'pat-escoba-roja-recto' onClick={() => handleComprar('5_10')}>
                </Hexagon>
                <Hexagon q={1.5} r={-1.5} s={1.5} fill = 'pat-escoba-roja-derecha' onClick={() => handleComprar('8_10')}>
                </Hexagon>
                <Hexagon q={1.5} r={0} s={1.5} fill = 'pat-escoba-roja-izquierda' onClick={() => handleComprar('10_13')}>
                </Hexagon>
                <Hexagon q={0} r={1.5} s={-1.5} fill = 'pat-logo' onClick={() => handleComprar('10_15')}>
                </Hexagon>
                <Hexagon q={-1.5} r={1.5} s={0} fill = 'pat-logo' onClick={() => handleComprar('10_12')}>
                </Hexagon>
                <Hexagon q={-1.5} r={0} s={1.5} fill = 'pat-logo' onClick={() => handleComprar('7_10')}>
                </Hexagon>
                {/* Escobas segunda vuelta */}
                <Hexagon q={1.5} r={-3} s={-2} fill = 'pat-logo' onClick={() => handleComprar('5_8')}>
                </Hexagon>
                <Hexagon q={3} r={-1.5} s={-1} fill = 'pat-logo' onClick={() => handleComprar('8_13')}>
                </Hexagon>
                <Hexagon q={3} r={1.5} s={-4.5} fill = 'pat-logo' onClick={() => handleComprar('13_18')}>
                </Hexagon>
                <Hexagon q={1.5} r={3} s={-4.5} fill = 'pat-logo' onClick={() => handleComprar('15_18')}>
                </Hexagon>
                <Hexagon q={-1.5} r={3} s={-1.5} fill = 'pat-logo' onClick={() => handleComprar('12_15')}>
                </Hexagon>
                <Hexagon q={-3} r={1.5} s={-1.5} fill = 'pat-logo' onClick={() => handleComprar('7_12')}>
                </Hexagon>
                <Hexagon q={-3} r={-1.5} s={0} fill = 'pat-logo' onClick={() => handleComprar('2_7')}>
                </Hexagon>
                <Hexagon q={-1.5} r={-3} s={1.5} fill = 'pat-logo' onClick={() => handleComprar('2_5')}>
                </Hexagon>
                {/* Escobas tercera vuelta */}
                <Hexagon q={3} r={-4.5} s={1.5} fill = 'pat-logo' onClick={() => handleComprar('3_8')}>
                </Hexagon>
                <Hexagon q={4.5} r={-3} s={-1.5} fill = 'pat-logo' onClick={() => handleComprar('8_11')}>
                </Hexagon>
                <Hexagon q={4.5} r={1.5} s={-6} fill = 'pat-logo' onClick={() => handleComprar('16_18')}>
                </Hexagon>
                <Hexagon q={-1.5} r={6} s={-4.5} fill = 'pat-logo' onClick={() => handleComprar('17_19')}>
                </Hexagon>
                <Hexagon q={-4.5} r={-1.5} s={6} fill = 'pat-logo' onClick={() => handleComprar('2_4')}>
                </Hexagon>
                <Hexagon q={-6} r={1.5} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('4_9')}>
                </Hexagon>
                <Hexagon q={-1.5} r={4.5} s={-3} fill = 'pat-logo' onClick={() => handleComprar('15_17')}>
                </Hexagon>
                <Hexagon q={-3} r={4.5} s={-1.5} fill = 'pat-logo' onClick={() => handleComprar('12_17')}>
                </Hexagon>
                <Hexagon q={-4.5} r={3} s={1.5} fill = 'pat-logo' onClick={() => handleComprar('9_12')}>
                </Hexagon>
                <Hexagon q={-1.5} r={-1.5} s={3} fill = 'pat-logo' onClick={() => handleComprar('5_7')}>
                </Hexagon>
                <Hexagon q={-4.5} r={1.5} s={3} fill = 'pat-logo' onClick={() => handleComprar('7_9')}>
                </Hexagon>
                <Hexagon q={1.5} r={-4.5} s={3} fill = 'pat-logo' onClick={() => handleComprar('3_5')}>
                </Hexagon>
                <Hexagon q={0} r={-4.5} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('1_5')}>
                </Hexagon>
                <Hexagon q={4.5} r={-4.5} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('6_8')}>
                </Hexagon>
                <Hexagon q={4.5} r={0} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('13_16')}>
                </Hexagon>
                <Hexagon q={0} r={4.5} s={-4.5} fill = 'pat-logo' onClick={() => handleComprar('15_19')}>
                </Hexagon>
                <Hexagon q={-4.5} r={4.5} s={0} fill = 'pat-logo' onClick={() => handleComprar('12_14')}>
                </Hexagon>
                <Hexagon q={-4.5} r={0} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('4_7')}>
                </Hexagon>
                <Hexagon q={4.5} r={-1.5} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('11_13')}>
                </Hexagon>
                <Hexagon q={-1.5} r={-4.5} s={6} fill = 'pat-logo' onClick={() => handleComprar('1_2')}>
                </Hexagon>
                <Hexagon q={-6} r={4.5} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('9_14')}>
                </Hexagon>
                <Hexagon q={-4.5} r={6} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('14_17')}>
                </Hexagon>
                <Hexagon q={1.5} r={4.5} s={-4.5} fill = 'pat-logo' onClick={() => handleComprar('18_19')}>
                </Hexagon>
                <Hexagon q={6} r={-1.5} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('11_16')}>
                </Hexagon>
                <Hexagon q={6} r={-4.5} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('6_11')}>
                </Hexagon>
                <Hexagon q={4.5} r={-6} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('3_6')}>
                </Hexagon>
                <Hexagon q={1.5} r={-6} s={4.5} fill = 'pat-logo' onClick={() => handleComprar('1_3')}>
                </Hexagon>
                <Hexagon q={1.5} r={1.5} s={0} fill = 'pat-logo' onClick={() => handleComprar('13_15')}>
                </Hexagon>


                
                {/* Hexagonos cabanas y castillos */}
                {/* Segunda vuelta */}
                <Hexagon q={1} r={-2} s={1} id='5_8_10' fill = {fotoPos['foto_pos_5_8_10']} onClick={() => handleComprar('5_8_10')}>
                </Hexagon>
                <Hexagon q={2} r={-1} s={-1} id='8_10_13' fill = {fotoPos['foto_pos_8_10_13']} onClick={() => handleComprar('8_10_13')}>
                </Hexagon>
                <Hexagon q={1} r={1} s={-2} id='10_13_15' fill = {fotoPos['foto_pos_10_13_15']} onClick={() => handleComprar('10_13_15')}>
                </Hexagon>
                <Hexagon q={-1} r={2} s={-1} id='10_12_15' fill = {fotoPos['foto_pos_10_12_15']}  onClick={() => handleComprar('10_12_15')}>
                </Hexagon>
                <Hexagon q={-2} r={1} s={1} id='7_10_12' fill = {fotoPos['foto_pos_7_10_12']}  onClick={() => handleComprar('7_10_12')}>
                </Hexagon>
                <Hexagon q={-1} r={-1} s={2} id='5_7_10' fill = {fotoPos['foto_pos_5_7_10']}  onClick={() => handleComprar('5_7_10')}>
                </Hexagon>
                {/* Tercera vuelta */}
                {/* Cuarta vuelta */}
                <Hexagon q={2} r={-4} s={2} id='3_5_8' fill = {fotoPos['foto_pos_3_5_8']}  onClick={() => handleComprar('3_5_8')}>
                </Hexagon>
                <Hexagon q={4} r={-2} s={-2} id='8_11_13' fill = {fotoPos['foto_pos_8_11_13']}  onClick={() => handleComprar('8_11_13')}>
                </Hexagon>
                <Hexagon q={2} r={2} s={-4} id='13_15_18' fill = {fotoPos['foto_pos_13_15_18']}  onClick={() => handleComprar('13_15_18')}>
                </Hexagon>
                <Hexagon q={-2} r={4} s={-2} id='12_15_17' fill = {fotoPos['foto_pos_12_15_17']}  onClick={() => handleComprar('12_15_17')}>
                </Hexagon>
                <Hexagon q={-4} r={2} s={2} id='7_9_12' fill = {fotoPos['foto_pos_7_9_12']}  onClick={() => handleComprar('7_9_12')}>
                </Hexagon>
                <Hexagon q={-2} r={-2} s={4} id='2_5_7' fill = {fotoPos['foto_pos_2_5_7']}  onClick={() => handleComprar('2_5_7')}>
                </Hexagon>
                {/* Quinta vuelta */}
                <Hexagon q={1} r={-5} s={4} id='1_3_5' fill = {fotoPos['foto_pos_1_3_5']}  onClick={() => handleComprar('1_3_5')}>
                </Hexagon>
                <Hexagon q={4} r={-5} s={1} id='3_6_8' fill = {fotoPos['foto_pos_3_6_8']}  onClick={() => handleComprar('3_6_8')}>
                </Hexagon>
                <Hexagon q={5} r={-4} s={-1} id='6_8_11' fill = {fotoPos['foto_pos_6_8_11']}  onClick={() => handleComprar('6_8_11')}>
                </Hexagon>
                <Hexagon q={5} r={-1} s={-4} id='11_13_16' fill = {fotoPos['foto_pos_11_13_16']}  onClick={() => handleComprar('11_13_16')}>
                </Hexagon>
                <Hexagon q={4} r={1} s={-5} id='13_16_18' fill = {fotoPos['foto_pos_13_16_18']}  onClick={() => handleComprar('13_16_18')}>
                </Hexagon>
                <Hexagon q={1} r={4} s={-5} id='15_18_19' fill = {fotoPos['foto_pos_15_18_19']}  onClick={() => handleComprar('15_18_19')}>
                </Hexagon>
                <Hexagon q={-1} r={5} s={-4} id='15_17_19' fill = {fotoPos['foto_pos_15_17_19']} onClick={() => handleComprar('15_17_19')}>
                </Hexagon>
                <Hexagon q={-4} r={5} s={-1} id='12_14_17' fill = {fotoPos['foto_pos_12_14_17']}  onClick={() => handleComprar('12_14_17')}>
                </Hexagon>
                <Hexagon q={-5} r={4} s={1} id='9_12_14' fill = {fotoPos['foto_pos_9_12_14']}  onClick={() => handleComprar('9_12_14')}>
                </Hexagon>
                <Hexagon q={-5} r={1} s={4} id='4_7_9' fill = {fotoPos['foto_pos_4_7_9']}  onClick={() => handleComprar('4_7_9')}>
                </Hexagon>
                <Hexagon q={-4} r={-1} s={5} id='2_4_7' fill = {fotoPos['foto_pos_2_4_7']}  onClick={() => handleComprar('2_4_7')}>
                </Hexagon>
                <Hexagon q={-1} r={-4} s={5} id='1_2_5' fill = {fotoPos['foto_pos_1_2_5']}  onClick={() => handleComprar('1_2_5')}>
                </Hexagon>
                {/* Sexta vuelta */}
                
                

              
            </Layout>

            {/* Patterns de terreno */}
            <Pattern id="pat-1" link={Image1} size={hexagonSize}/>
            <Pattern id="pat-2" link={Image2} size={hexagonSize}/>
            <Pattern id="pat-3" link={Image3} size={hexagonSize3}/>
            <Pattern id="pat-4" link={Image4} size={hexagonSize}/>
            <Pattern id="pat-5" link={Image5} size={hexagonSize}/>
            <Pattern id="pat-logo" link={Image7} size={{x:9.0, y:8.0}}/>

            {/* Patterns de cabanas */}
            <Pattern id="pat-cabana-roja" link={CabanaRoja} size={{x:3.0, y:1.8}}/>
            {/* <Pattern id="pat-cabana-verde" link={CabanaVerde} size={{x:1.8, y:1.8}}/> */}
            <Pattern id="pat-cabana-azul" link={CabanaAzul} size={{x:3.0, y:1.8}}/>
            {/* <Pattern id="pat-cabana-amarilla" link={CabanaAmarilla} size={{x:1.8, y:1.8}}/> */}

            {/* Patterns de castillos */}
            <Pattern id="pat-castillo-rojo" link={CastilloRojo} size={{x:3.0, y:1.8}}/>
            {/* <Pattern id="pat-castillo-verde" link={CastilloVerde} size={{x:1.8, y:1.8}}/> */}
            <Pattern id="pat-castillo-azul" link={CastilloAzul} size={{x:3.0, y:1.8}}/>
            {/* <Pattern id="pat-castillo-amarillo" link={CastilloAmarillo} size={{x:1.8, y:1.8}}/> */}

            <Pattern id="pat-escoba-roja-recto" link={EscobaRojaRecto} size={{x:3.5, y:2.5}}/>
            <Pattern id="pat-escoba-roja-derecha" link={EscobaRojaDerecha} size={{x:3.5, y:4}}/>
            <Pattern id="pat-escoba-roja-izquierda" link={EscobaRojaIzquierda} size={{x:4, y:3.5}}/>
          </HexGrid>
          
        </div>

        <div className='div-derecho-partida'>
          <button className="button-partida" id="button-lanzar">Lanzar Dados</button>
          <br></br>
          <p>Resultado dados: </p>
          <br></br>
          <button className="button-partida" id="button-escoba">Comprar Escoba</button>
          <br></br>
          <button className="button-partida" id="button-cabana" onClick={handleBotonComprarCabana}>Comprar Cabana</button>
          <br></br>
          <button className="button-partida" id="button-castillo" onClick={handleBotonComprarCastillo}>Comprar Castillo</button>
          <br></br>
          <button className="button-partida" id="button-finalizar">Finalizar Turno</button>
          <div className="div-cuadro-respuestas">
            <p> Si desea comprar algo, aprente uno de los botones</p>
          </div>
        </div>
      
      </div>
   
    );

    // Obtén una referencia al elemento
    var hexagonElement = document.getElementById('hexagon_125');

    // Oculta el hexágono
    hexagonElement.style.display = 'none';
}

export default Partida;

