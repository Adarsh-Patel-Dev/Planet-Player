
import React from 'react'
import HeroImg from "../../Assets/HeroCar.png"
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

import './hero.css'

function Hero() {
  return (
    <section className="hero-section">

        <div className="hero-text">All about the <span className="light-green">DRIVE </span>
        <p className="hero-section-para">Get the </p>
        <p className="hero-section-para">Feeling</p>
     <div className="cta-btns">
       <NavLink to='/videolisting'>
       <button className="primary-cta" >Watch Now <FaArrowRight style={{fontSize: "18px"}}/></button>
       </NavLink>
    </div>
</div>
<div className="img-hero">
    <img src={HeroImg} alt='plant image'/>
</div>
</section>
  )
}

export { Hero }