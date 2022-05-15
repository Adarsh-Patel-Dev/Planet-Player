
import React from 'react'
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

import './hero.css'

function Hero() {
  return (
    <section className="hero-section">

        <div className="hero-text">All about the <span className="light-green">DRIVE </span>
        <p className="hero-section-para">Get the </p>
        <p className="hero-section-para">Feeling</p>
     <div className="cta-btns">
       {/* <NavLink to='/products'> */}
       <button className="primary-cta" >Watch Now <FaArrowRight style={{fontSize: "18px"}}/></button>
       {/* </NavLink> */}
    </div>
</div>
<div className="img-hero">
    <img src='https://img1.fonwall.ru/o/wz/lamborghini-huracan-lamborghini-2018-cars-cars-yaxj.jpeg?route=mid&h=750' alt='plant image'/>
</div>
</section>
  )
}

export { Hero }