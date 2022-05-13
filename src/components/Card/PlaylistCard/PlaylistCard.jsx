import React from "react";
import "../card.css";
import { useNavigate } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
// import { useHistoryContext } from "../../context/history-context";
// import { useLikeVideoContext } from "../../context/liked-video-context";
// import { usePlaylistContext } from "../../context/playlist-context";
// import { useWatchLaterContext } from "../../context/watchLater-context";

function PlaylistCard({playlist}) {
//   const {
//     _id,
//     title,
//     creator,
//     creater_img,
//     thumbnailUrl,
//     videos,
//     description,
//     video_id,
//     old,
//     duration,
//     views,
//   } = video;

  const navigate = useNavigate();

//   const { addToHistory, setHistory } = useHistoryContext();
//   const { addToLikeVideo, setLikeVideo } = useLikeVideoContext();
//   const { addPlaylists, addToPlaylist } = usePlaylistContext();
//   const { addToWatchLater, setWatchLater } = useWatchLaterContext();
  return (
    <div className="card" >
      <div className="card--image">
        <img
        //   onClick={() => {
        //     navigate(`/singlevideopage/${_id}`);
        //   }}
        //   src={thumbnailUrl}
            src="https://images.moneycontrol.com/static-mcnews/2022/05/3-toyota-all-electric-bZ4X-sport-utility-vehicles.jpg"
          className="img-fluid"
          alt="Plant-Image"
        />

        {/* <ul className="card--options">
          <li onClick={() => addToWatchLater(video, setWatchLater)}>
            <MdOutlineWatchLater />
          </li>
          <li onClick={addToPlaylist}>
            <MdPlaylistPlay />
          </li>
          <li onClick={() => addToLikeVideo(video, setLikeVideo)}>
            <BiLike />
          </li>
        </ul> */}
      </div>

      <div className="card--body">
        <div className="card--details">
          <h4 className="card--title">playlist name</h4>
        </div>
      </div>
    </div>
  );
}

export { PlaylistCard };
