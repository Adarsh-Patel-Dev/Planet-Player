import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { VideoListingProvider } from "./context/video-listing-context"
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <VideoListingProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </VideoListingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
