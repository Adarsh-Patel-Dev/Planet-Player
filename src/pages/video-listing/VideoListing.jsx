import React, { useEffect } from "react";
import "../LandingPage/landingpage.css";
import { useVideoListing } from "../../context/";
import { AsideBar, CardHorizontal } from "../../components/";
import { TailSpin } from "react-loader-spinner";

function VideoListing() {
  const { videoList, loading } = useVideoListing();
  const suffleVideos = videoList.sort(() => Math.random() - 0.5);
 
  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">

          { loading ? (
            <span className="spinner">
              <TailSpin color="#76C310" height={80} width={80} />
              <br/>
              <b>Loading...</b>
            </span>
          ) : (
            <div className="card--container">
              {suffleVideos?.map((video) => (
                <CardHorizontal key={video._id} video={video} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export { VideoListing };
