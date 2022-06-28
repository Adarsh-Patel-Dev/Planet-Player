import React, { useEffect } from "react";
import "../LandingPage/landingpage.css";
import { useVideoListing } from "../../context/";
import { AsideBar, CardHorizontal } from "../../components/";
import { TailSpin } from "react-loader-spinner";

function VideoListing() {
  const { videoList, loading, search } = useVideoListing();
  const suffleVideos = videoList.sort(() => Math.random() - 0.5);
  

  const searchResultVideo = suffleVideos.filter(
    (video) =>
      video.title.toLowerCase().includes(search) ||
      video.creator.toLowerCase().includes(search) 
  );
 
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
              { searchResultVideo.length > 0 ? searchResultVideo ?.map((video) => (
                <CardHorizontal key={video._id} video={video} />
              )) : 
               
              <section className="error-section">
              <div className="error-text">
                <p className="error-details">
                  Your search <b>{search}</b> did not match any videos.
                </p>
                  <p className="error-details">
                    Try different keywords.
                  </p>
              </div>
            </section>
              }
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export { VideoListing };
