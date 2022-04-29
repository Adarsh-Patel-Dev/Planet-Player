import "./App.css";
import MockAPI from "./mockman/MockAPI";
import React from 'react';
import { AsideBar } from "./components/Asidebar/Asidebar";
import { Hero } from "./components/HeroSection/Hero";
import {LandingPage} from "./pages/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";
import { CardHorizontal } from "./components/Card/CardHorizontal";



function App() {
  return (  
    <div className="App">
      <LandingPage/>
      {/* <MockAPI/> */}
      <Footer/>
    </div>
  );
}

export default App;
