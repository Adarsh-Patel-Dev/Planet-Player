import React from "react";
import "./card.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MdOutlineWatchLater,
  MdWatchLater,
  BiLike,
  AiFillLike,
  AiOutlineLike,
} from "../../Assets/Icons";
import {
  useHistoryContext,
  useLikeVideoContext,
  usePlaylistContext,
  useWatchLaterContext,
} from "../../context/";

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
    watchLater,
    old,
    duration,
    views,
  } = video;

  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("token");

  const { addToHistory, setHistory } = useHistoryContext();
  const { setIsLike, isLike, addToLikeVideo, setLikeVideo } =
    useLikeVideoContext();
  const {
    addToWatchLater,
    removeFromWatchLater,
    setWatchLater,
    inWatchLater,
    setInWatchLater,
  } = useWatchLaterContext();
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

        {
          !watchLater
          ?
          <li
            onClick={() =>
              addToWatchLater(video, setWatchLater, setInWatchLater)
            }
          >
            <MdOutlineWatchLater />
          </li>
          : <li
            onClick={() =>
              removeFromWatchLater(_id, setWatchLater, setInWatchLater)
            }
          >
            <MdWatchLater />
          </li>

        }
          <li onClick={() => addToLikeVideo(video, setLikeVideo, setIsLike)}>
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
