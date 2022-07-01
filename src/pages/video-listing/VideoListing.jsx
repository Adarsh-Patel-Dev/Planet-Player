import React, { useEffect } from "react";
import "../LandingPage/landingpage.css";
import { useVideoListing } from "../../context/";
import { AsideBar, CardHorizontal } from "../../components/";
import { TailSpin } from "react-loader-spinner";
import CategoryChips from "../../components/CategoryChips/CategoryChips";

function VideoListing() {
  const { videoList, loading, search, selectedCategory } = useVideoListing();
  const suffleVideos = videoList.sort(() => Math.random() - 0.5);

  const searchResultVideo = suffleVideos.filter(
    (video) =>
      video.title.includes(search) ||
      video.title.toLowerCase().includes(search) ||
      video.title.toUpperCase().includes(search) ||
      video.creator.includes(search) ||
      video.creator.toLowerCase().includes(search) ||
      video.creator.toUpperCase().includes(search)
  );

  const finalfilteredVideos =
    selectedCategory === "All"
      ? searchResultVideo
      : searchResultVideo.filter(
          (video) => video.category === selectedCategory
        );

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <CategoryChips />
          {loading ? (
            <span className="spinner">
              <TailSpin color="#76C310" height={80} width={80} />
              <br />
              <b>Loading...</b>
            </span>
          ) : (
            <div className="card--container">
              {finalfilteredVideos.length > 0 ? (
                finalfilteredVideos?.map((video) => (
                  <CardHorizontal key={video._id} video={video} />
                ))
              ) : (
                <section className="error-section">
                  <div className="error-text">
                    <p className="error-details">
                      Your search <b>{search}</b> did not match any videos.
                    </p>
                    <p className="error-details">Try different keywords.</p>
                  </div>
                </section>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export { VideoListing };
