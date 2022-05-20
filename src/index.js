import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { VideoListingProvider } from "./context/video-listing-context";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { WatchLaterProvider } from "./context/watchLater-context";
import { HistoryProvider } from "./context/history-context";
import { LikedVideoProvider } from "./context/liked-video-context";
import { PlaylistProvider } from "./context/playlist-context";
import { AuthProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WatchLaterProvider>
          <VideoListingProvider>
            <HistoryProvider>
              <LikedVideoProvider>
                <PlaylistProvider>
                  <App />
                </PlaylistProvider>
              </LikedVideoProvider>
            </HistoryProvider>
          </VideoListingProvider>
        </WatchLaterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
