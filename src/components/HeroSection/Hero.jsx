
import React from 'react'
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

import './hero.css'

function Hero() {
  return (
    <section className="hero-section">

        <div className="hero-text">Growing <span className="light-green">PLANTS </span>
        <p className="hero-section-para">Today</p>
        <p className="hero-section-para">will help you Tomorrow</p>
     <div className="cta-btns">
       {/* <NavLink to='/products'> */}
       <button className="primary-cta" >Watch Now <FaArrowRight style={{fontSize: "18px"}}/></button>
       {/* </NavLink> */}
    </div>
</div>
<div className="img-hero">
    <img src='https://images.unsplash.com/photo-1538506392157-218c11f95129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80' alt='plant image'/>
</div>
</section>
  )
}

export { Hero }