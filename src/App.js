import "./App.css";
import MockAPI from "./mockman/MockAPI";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navibar/Navbar";
import HomePage from "./pages/LandingPage/HomePage/HomePage";

function App() {
  return (  
    <div className="App">
        {/* <Navbar/> */}
        <HomePage/>
     
      <MockAPI/>
      
    </div>
  );
}

export default App;
