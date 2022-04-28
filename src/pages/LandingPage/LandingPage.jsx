
import React from 'react'
import './landingpage.css'
import { AsideBar } from '../../components/Asidebar/Asidebar';
import { Hero } from '../../components/HeroSection/Hero';
import { Navigation } from '../../components/Navigation/Navigation';
import { CardHorizontal } from '../../components/Card/CardHorizontal';


function LandingPage() {
  return (
    <div>
    <Navigation/>
    <div className='body-section'>
     <AsideBar/>
     <Hero/>
     </div>

    <div className="category-header">
        <h3 className="category-subheading">Trending Videos</h3>
       {/* <NavLink to='/videos' > */}
       <button className="btn btn--primary">View All</button>
       {/* </NavLink>  */}
    </div>

    <section class="cards">
        <div class="card--container">
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
        </div>
    </section>
    </div>
  )
}

export { LandingPage}