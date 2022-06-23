
import React from 'react';
import "../card.css"
import './smallcard.css'
import { useNavigate } from "react-router-dom";
import { MdOutlineWatchLater, MdPlaylistPlay, MdOutlineClose, MdDeleteOutline, MdClose } from "react-icons/md";
import { useHistoryContext } from "../../../context/history-context";

function SmallCard({video, removeFunction}) {
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
      } = video;
      const navigate = useNavigate();
    
      const { addToHistory, setHistory } = useHistoryContext();

  return (
    <div className="card-small" >
    <div className="card--image-small">
      <img
        onClick={() => {
          addToHistory(video, setHistory);
          navigate(`/singlevideopage/${_id}`);
        }}
        src={thumbnailUrl}
        className="img-fluid-small"
        alt="Plant-Image"
      />

      <ul className="card--options-small">
      {/* ======================TODO-to be implemented in future====================== */}
        {/* <li 
        // onClick={() => addToWatchLater(video, setWatchLater)}
        >
          <MdOutlineWatchLater />
        </li>
        <li 
        // onClick={addToPlaylist}
        >
          <MdPlaylistPlay />
        </li>
         */}
      </ul>

      <span className="duration-label">{duration}</span>
    </div>

    <div className="card--body-small">
      <div className="card--details-small">
        <div className="channel-logo-small">
          <img className="logo-img-small" src={creater_img} alt="logo" />
        </div>
        <div className='main-section-heading small'>
        <h4 className="card--title-small">{title}</h4>
        <span 
        onClick={removeFunction}
        className='remove-btn'><MdClose className='icon'/></span>
        </div>
      </div>

      <div className="card--footer-small">
        <div className="card-channel-small">{creator}</div>
        <div className="card-views-small">
          {} 
        </div>
      </div>
    </div>
  </div>
  )
}

export { SmallCard };