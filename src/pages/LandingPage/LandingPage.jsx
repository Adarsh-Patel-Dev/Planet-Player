import React from "react";
import "./landingpage.css";
import { Link, NavLink } from "react-router-dom";
import { AsideBar, Hero } from "../../components/";

function LandingPage() {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM"
  );
  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <Hero />
      </div>

      <div className="category-header">
        <h3 className="category-subheading">Trending Videos</h3>
        {/* <NavLink to="/videolisting"> */}
          <button onClick={() => {}} className="btn btn--primary">
            View All
          </button>
          
        {/* </NavLink> */}
      </div>

      <section className="cards">
        <div className="card--container"></div>
      </section>
    </div>
  );
}

export { LandingPage };
