import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MockAPI from "./mockman/MockAPI";
import { 
  SingleVideoCard, 
  Navigation, 
  Footer,
 } from "./components/";
import {
  LandingPage,
  SinglePlaylistPage,
  PlaylistPage,
  HistoryPage,
  WatchLater,
  LikedVideoPage,
  VideoListing,
} from "./pages/";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/likedvideos" element={<LikedVideoPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/singlevideopage/:videoId" element={<SingleVideoCard />} />
        <Route
          path="/singleplaylistpage/:playlistId"
          element={<SinglePlaylistPage />}
        />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
