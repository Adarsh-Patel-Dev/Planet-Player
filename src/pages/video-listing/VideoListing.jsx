import React, { useState, useEffect } from "react";
import "../LandingPage/landingpage.css";
import { useVideoListing } from "../../context/video-listing-context";
import { AsideBar, CardHorizontal } from "../../components/";

function VideoListing() {
  const { videoList } = useVideoListing();

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <div className="card--container">
            {videoList?.map((video) => (
              <CardHorizontal key={video._id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { VideoListing };
