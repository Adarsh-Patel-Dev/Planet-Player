import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MockAPI from "./mockman/MockAPI";
import { SingleVideoCard, Navigation, Footer } from "./components/";
import {
  LandingPage,
  SinglePlaylistPage,
  PlaylistPage,
  HistoryPage,
  WatchLater,
  LikedVideoPage,
  VideoListing,
} from "./pages/";
import { Signup } from "./pages/SignUpPage/Signup";
import { Login } from "./pages/LoginPage/LoginPage";
import { Auth } from "./components/Auth/Auth";
import { Logout } from "./pages/LogoutPage/Logout";
import { CategoryCard } from "./components/Card/CategoryCard/CategoryCard";
import { ErrorPage } from "./pages/Error404Page/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/card" element={<CategoryCard/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/singlevideopage/:videoId" element={<SingleVideoCard />} />
        {/* Private Routes */}
        <Route
          path="/likedvideos"
          element={
            <Auth>
              <LikedVideoPage />
            </Auth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <Auth>
              <WatchLater />
            </Auth>
          }
        />
        <Route
          path="/history"
          element={
            <Auth>
              <HistoryPage />
            </Auth>
          }
        />
        <Route
          path="/playlist"
          element={
            <Auth>
              <PlaylistPage />
            </Auth>
          }
        />
        <Route
          path="/singleplaylistpage/:playlistId"
          element={
            <Auth>
              <SinglePlaylistPage />
            </Auth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
