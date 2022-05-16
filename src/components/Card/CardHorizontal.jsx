import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineWatchLater, BiLike } from "../../Assets/Icons";
import { useHistoryContext, useLikeVideoContext, usePlaylistContext, useWatchLaterContext } from "../../context/";

function CardHorizontal({ video }) {
  const {
    _id,
    title,
    creator,
    creater_img,
    thumbnailUrl,
    videos,
    description,
    video_id,
    old,
    duration,
    views,
  } = video;
  const navigate = useNavigate();

  const { addToHistory, setHistory } = useHistoryContext();
  const { addToLikeVideo, setLikeVideo } = useLikeVideoContext();
  const { addToWatchLater, setWatchLater } = useWatchLaterContext();
  return (
    <div className="card" key={_id}>
      <div className="card--image">
        <img
          onClick={() => {
            addToHistory(video, setHistory);
            navigate(`/singlevideopage/${_id}`);
          }}
          src={thumbnailUrl}
          className="img-fluid"
          alt={creator}
        />

        <ul className="card--options">
          <li onClick={() => addToWatchLater(video, setWatchLater)}>
            <MdOutlineWatchLater />
          </li>
          <li onClick={() => addToLikeVideo(video, setLikeVideo)}>
            <BiLike />
          </li>
        </ul>

        <span className="duration-label">{duration}</span>
      </div>

      <div className="card--body">
        <div className="card--details">
          <div className="channel-logo">
            <img className="logo-img" src={creater_img} alt="logo" />
          </div>
          <h4 className="card--title">{title}</h4>
        </div>

        <div className="card--footer">
          <div className="card-channel">{creator}</div>
          <div className="card-views">
            {views} . {old}
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardHorizontal };
