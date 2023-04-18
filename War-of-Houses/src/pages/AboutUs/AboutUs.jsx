import React from "react";
import './about-us.css'
import FotoAnge from '../../assets/img/foto_ange.jpeg'
import FotoCami from '../../assets/img/foto_cami.jpeg'

function AboutUs() {
  return (
    <main className="content-about-us">
      <div className="bg-container-about-us"></div>

      <div className='equipo'>
        <div className='persona'>
          <img src={FotoAnge}></img>
          <hr class="line"></hr>
          <h2>María Angélica Gazitúa</h2>
          <p class="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>ange.gazitua@uc.cl</p>
          <p><button class="button-about">Contact</button></p>
        </div>

        <div className='persona'>
          <img src={FotoCami}></img>
          <hr class="line"></hr>
          <h2>Camila Bennett</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button class="button-about">Contact</button></p>
        </div>
      </div>

    </main>
  )
}

export default AboutUs;