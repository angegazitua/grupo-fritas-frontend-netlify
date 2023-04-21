import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

function LandingPage() {
  return (
    <main className="content">
        <div className="bg-container"></div>
        <div className="content-landing">
            <h1>Welcome to <span className="name-landing">War of Houses</span></h1>
            <h2>LLeva a tu casa la conquista de Howards</h2>
        </div>
    </main>
  )
}

export default LandingPage;