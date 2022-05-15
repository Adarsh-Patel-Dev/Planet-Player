import React from "react";
import "../card.css";
import "./playlistcard.css"

import { useNavigate } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
// import { useHistoryContext } from "../../context/history-context";
// import { useLikeVideoContext } from "../../context/liked-video-context";
// import { usePlaylistContext } from "../../context/playlist-context";
// import { useWatchLaterContext } from "../../context/watchLater-context";

function PlaylistCard({playlist}) {


  const {
  title: { playlistName },
  _id,
  videos,
} = playlist;

const img = (videos.length>0) ? videos[0].thumbnailUrl :"https://www.luxuryandexpensive.com/pic/50010_1.jpg"

console.log("from playlistpAGE",playlist)
console.log("from playlistpAGE",videos)
console.log("from playlistpAGE",videos.length)

  const navigate = useNavigate();

//   const { addToHistory, setHistory } = useHistoryContext();
//   const { addToLikeVideo, setLikeVideo } = useLikeVideoContext();
//   const { addPlaylists, addToPlaylist } = usePlaylistContext();
//   const { addToWatchLater, setWatchLater } = useWatchLaterContext();
  return (
    <div className="card" >
      <div className="card--image">
     <div className="card-overlay">
      <p>{videos.length}</p>
      <MdPlaylistPlay/>
     </div>
        <img
          onClick={() => {
            navigate(`/singleplaylistpage/${_id}`);
          }}
            src={img}
          className="img-fluid"
          // alt={playlistName}
        />

      </div>

      <div className="card--body">
        <div className="card--details">
          <h4 className="card--title">{playlistName}</h4>
        </div>
      </div>
    </div>
  );
}

export { PlaylistCard };
