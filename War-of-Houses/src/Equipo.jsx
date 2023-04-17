import './equipo.css'
import React from 'react'
import FotoAnge from './assets/img/foto_ange.jpeg'
import FotoCami from './assets/img/foto_cami.jpeg'

export default function Equipo() {
    return (
        <>
            <div className='equipo'>
                <div className='persona'>
                    <img src={FotoAnge}></img>
                    <h2>Angélica Gazitúa</h2>
                    <p>Estudiante de Ingeniería Civil, Major Ingeneiría de Software
                        y Minor Ingeniería Industrial. 
                    </p>
                    <p>Dato curioso: Fanática de Harry Potter :) 
                    </p>
                </div>
                <div className='persona'>
                    <img src={FotoCami}></img>
                    <h2>Camila Bennett</h2>
                    <p>Estudiante de Ingeniería Civil, Major Ingeniería de Software
                        y Minor Ingeniería Industrial. 
                    </p>
                    <p>Dato curioso: Fanática de Catán 
                    </p>
                </div>
            </div>
            <a href='/'>Ir a Inicio</a>
        </>
    )
}