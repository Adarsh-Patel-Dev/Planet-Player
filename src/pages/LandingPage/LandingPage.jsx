import React from "react";
import "./landingpage.css";
import { Link, NavLink } from "react-router-dom";
import { AsideBar, Hero } from "../../components/";

function LandingPage() {

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <Hero />
      </div>


      {/* ===================== TODO - to be implemented in future ===================== */}

      {/* <div className="category-header">
        <h3 className="category-subheading">Trending Videos</h3>
          <button onClick={() => {}} className="btn btn--primary">
            View All
          </button>
          
      </div> */}

      {/* <section className="cards">
        <div className="card--container"></div>
      </section> */}
    </div>
  );
}

export { LandingPage };
