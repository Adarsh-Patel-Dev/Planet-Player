import React, {  useEffect } from "react";
import "../LandingPage/landingpage.css";
import { useVideoListing } from "../../context/";
import { AsideBar, CardHorizontal } from "../../components/";

function VideoListing() {
  const { videoList } = useVideoListing();
  const suffleVideos = videoList.sort(()=>Math.random() - 0.5 )


  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <div className="card--container">
            {suffleVideos?.map((video) => (
              <CardHorizontal key={video._id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { VideoListing };
