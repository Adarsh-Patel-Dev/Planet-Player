import React from "react";
import "../card.css";
import "./playlistcard.css";
import {  MdDeleteOutline } from "react-icons/md";


import { useNavigate } from "react-router-dom";
import { MdPlaylistPlay } from "react-icons/md";
import { usePlaylistContext } from "../../../context";

function PlaylistCard({ playlist }) {
  const {
    title: { playlistName },
    _id,
    videos,
  } = playlist;
  const { removePlaylist, setPlaylist } = usePlaylistContext(); 

  const img =
    videos.length > 0
      ? videos[0].thumbnailUrl
      : "https://i.ytimg.com/vi/AjWfY7SnMBI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDBLqquvLqqTiEbGsVhoxOqMiBIgA";

  const navigate = useNavigate();

  return (
    <div className="card thin--border">
      <div className="card--image">
        <div className="card-overlay">
          <p>{videos.length}</p>
          <MdPlaylistPlay />
        </div>
        <img
          onClick={() => {
            navigate(`/singleplaylistpage/${_id}`);
          }}
          src={img}
          className="img-fluid"
          alt={playlistName}
        />
        {
          videos.length === 0 ? <p className="empty-playlist">Empty <br/>Playlist</p> : ""
        }
      </div>

      <div className="card--body">
        <div className="card--details--playlist">
          <h4 className="card--title">{playlistName}</h4>
          <i className="playlist-delete-icon">
          <MdDeleteOutline onClick={()=>removePlaylist(_id, setPlaylist)}/>
          </i>
        </div>
      </div>
    </div>
  );
}

export { PlaylistCard };
