import "./App.css";
import MockAPI from "./mockman/MockAPI";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { VideoListing } from "./pages/video-listing/VideoListing";
import { SingleVideoCard } from "./components/Card/SinglevideoCard/SingleVideoCard";

function App() {
  return (
    <div className="App">
     <Navigation/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/singlevideopage/:videoId" element={<SingleVideoCard />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
