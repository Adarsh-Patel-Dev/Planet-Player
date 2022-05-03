import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";

function CardHorizontal({ video }) {
  const { _id, title, creator, creater_img, thumbnailUrl, videos, description, video_id, old, duration, views } = video;
const navigate = useNavigate();
  return (
    <div className="card" key={_id}>
      <div className="card--image">
        <img
          onClick={() => {
            navigate(`/singlevideopage/${_id}`);
          }}
          src={thumbnailUrl}
          className="img-fluid"
          alt="Plant-Image"
        />

        <ul className="card--options">
          <li onClick={() => {}}>
            <MdOutlineWatchLater />
          </li>
          <li onClick={() => {}}>
            <MdPlaylistPlay />
          </li>
          <li onClick={() => {}}>
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
          <div className="card-views">{views} . {old}</div>
        </div>
      </div>
    </div>
  );
}

export { CardHorizontal };
