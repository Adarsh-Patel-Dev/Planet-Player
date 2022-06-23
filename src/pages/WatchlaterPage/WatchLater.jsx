import React, { useState, useEffect } from "react";
import "../LandingPage/landingpage.css";
import { AsideBar, SmallCard } from "../../components/";
import { useWatchLaterContext } from "../../context/";
import { MdOutlineWatchLater } from "react-icons/md";

function WatchLater() {
  const { watchLater, clearWatchlater, setWatchLater, removeFromWatchLater,inWatchLater,
    setInWatchLater, } =
    useWatchLaterContext();

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <section className="cards">
          <h3 className="main-section-heading">
            <div className="main-section-heading-center">
              <MdOutlineWatchLater />
              WatchLater Videos {watchLater.length}
            </div>
            <div>
              <button onClick={clearWatchlater} className="btn btn-primary">
                Clear All
              </button>
            </div>
          </h3>
          <div className="card--container">
            {watchLater?.map((video) => (
              <SmallCard
                key={video._id}
                video={video}
                removeFunction={() =>
                  removeFromWatchLater(video._id, setWatchLater,setInWatchLater)
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export { WatchLater };
