import React from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import { usePlaylistContext } from "../../../context/playlist-context.js";
import { useVideoListing } from "../../../context/video-listing-context.js";
import { PlaylistModal } from "../../PlaylistModal/PlaylistModal.jsx";
import { useLikeVideoContext } from "../../../context/liked-video-context";
import { AsideBar } from "../../Asidebar/Asidebar";

import "../card.css";
import "./singlevideo.css";
import { useWatchLaterContext } from "../../../context/watchLater-context.js";

function SingleVideoCard() {
  const { videoId } = useParams();

  const { videoList } = useVideoListing();
  const { toggleModal } = usePlaylistContext();
  const { addToLikeVideo, setLikeVideo, removeFromLikeVideo } = useLikeVideoContext();
  const { addToWatchLater, setWatchLater } = useWatchLaterContext();

  const filteredVideo = videoList.filter((video) => video._id === videoId);

  const {
    _id,
    old,
    views,
    title,
    creator,
    duration,
    video_id,
    creater_img,
    description,
    thumbnailUrl,
  } = filteredVideo[0];

  const videourl = `https://www.youtube.com/embed/${video_id}`;

  return (
    <div>
      <div className="body-section">
        <AsideBar />
        <div className="card--single-video">
          <div className="card--image--single-video">
            <iframe
              className="iframe"
              width="1100"
              height="620"
              src={videourl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span className="duration-label">{duration}</span>
          </div>

          <div className="card--body--single-video">
            <div className="card--details--singlevideo">
              <h4 className="card--title">{title}</h4>
              <div className="card-views">
                {views} . {old}
              </div>
              <div className="actions-buttons">
                <span>
                  <AiOutlineLike
                    onClick={() =>
                      addToLikeVideo(filteredVideo[0], setLikeVideo)
                    }
                  />
                </span>
                <span>
                  <AiOutlineDislike
                   onClick = {()=>removeFromLikeVideo(_id,setLikeVideo)}
                   />
                </span>
                <span>
                  <MdPlaylistAdd onClick={toggleModal} />
                </span>
                <PlaylistModal video={filteredVideo[0]} />
                <span>
                  <MdOutlineWatchLater 
                    onClick={()=>addToWatchLater(filteredVideo[0],setWatchLater)}
                  />
                </span>
              </div>
            </div>
            <hr />
            <div className="card--footer">
              <div className="channel-looogo">
                <img className="logo-img" src={creater_img} alt="logo" />
              </div>

              <div className="card-footer-singlevideo">
                <div className="card-channel">{creator}</div>
                <div className="card-channel-subscribers">10M Subscribers</div>
                <div className="card-channel-desc">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SingleVideoCard };
