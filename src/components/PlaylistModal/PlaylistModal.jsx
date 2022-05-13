import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { usePlaylistContext } from "../../context/playlist-context";
import "./playlistmodal.css";


function PlaylistModal({video}) {
  const [playlistName, setplaylistName] = useState("");

  const {
    toggleModal,
    display,
    setDisplay,
    playlist,
    setPlaylist,
    addPlaylists,
    removePlaylist,
    getPlaylist,
    getPlaylists,
    removeFromPlaylist,
    addToPlaylist,
  } = usePlaylistContext();
  return (
    <div>
    
      <div 
      style={{ display: display }} 
      class="modal--container">
        <div id="myModal" class="modal">
          <div class="modal-content">
            <MdClose onClick={toggleModal} class="close"></MdClose>

            <div className="modal-body">
              <h3>Add to Playlist</h3>
              <div class="divider"></div>

              {  playlist?.map((playlist) => {
                return (
                  <div className="checkbox-input">
                    <input
                      type="checkbox"
                      onChange={(e) => e.target.checked ?  addToPlaylist(video,playlist._id,setPlaylist): removeFromPlaylist(playlist._id,video._id,setPlaylist) 
                       
                       }
                      name="check"
                      className="checkbox"
                    />
                    {playlist.title.playlistName}
                  </div>
                );
              })}

              <div class="divider"></div>
              <h3> + Create new playlist</h3>
              <div class="divider"></div>
              <label htmlFor="playlistname">PLAYLIST NAME</label>
              <input
                name="playlistname"
                onChange={(e) => setplaylistName(e.target.value)}
                value={playlistName}
                className="input"
                placeholder="enter playlist name..."
              ></input>

              <div class="modal--btn">
                <button
                  onClick={() => {
                    addPlaylists(playlistName, setPlaylist);
                   
                  }}
                  class="btn btn--primary "
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlaylistModal };
