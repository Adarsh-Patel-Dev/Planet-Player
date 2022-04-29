import "./App.css";
import MockAPI from "./mockman/MockAPI";
import React from 'react';
import {LandingPage} from "./pages/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";

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
