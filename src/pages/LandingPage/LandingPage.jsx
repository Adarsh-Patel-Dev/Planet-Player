
import React from 'react'
import './landingpage.css'
import { 
  AsideBar,
  Hero,
  Navigation,
  CardHorizontal
  } from '../../components/';



function LandingPage() {
  return (
    <div>
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

    <section className="cards">
        <div className="card--container">
            {/* <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/> */}
        </div>
    </section>
    </div>
  )
}

export { LandingPage}