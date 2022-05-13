import axios from "axios";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();
const usePlaylistContext = () => useContext(PlaylistContext);

const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  const [display, setDisplay] = useState("none");
  const toggleModal = () =>{
    setDisplay(display === 'none' ? 'block' : 'none' )
  }

  async function getPlaylists(setPlaylist) {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/user/playlists",
        headers: { authorization: localStorage.getItem("token") },
      });

      if (response.status === 200) {
        setPlaylist(response.data.playlists);
        console.table("all playlists", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function addPlaylists(playlistName, setPlaylist) {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/playlists",
        headers: { authorization: localStorage.getItem("token") },
        data: {
          playlist: {
            title: { playlistName },
            description: "this is description ",
          },
        },
      });

      if (response.status === 201) {
        setPlaylist(response.data.playlists);
        console.table("added new playlists", playlist);
      }
    } catch (error) {
      console.error('this is error',error);
    }
  }
  console.table("added new playlist outside", playlist);

  async function removePlaylist(playlistId, setPlaylist) {
    try {
      const response = axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setPlaylist(response.data.playlists);
        console.table("remove one playlists", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getPlaylist(playlistId, setPlaylist) {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
      });

      // [play1,play2,play3].map(play => play._id === response.data.playlist._id ?  )

      if (response.status === 200) {
        setPlaylist(response.data.playlist);
        console.table("particular playlist", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function addToPlaylist(cardData, playlistId,  setPlaylist) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/playlists/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: cardData },
      });

      if (response.status === 201) {
        const updatedPlayList = playlist.map((playlist)=>{
          if(playlist._id === response.data.playlist._id){
            return { ...response.data.playlist };
          } return playlist
        })
        setPlaylist(updatedPlayList);
        // console.table("added video to playlists", playlist);
        // console.table("updated playlist playlists", updatedPlayList);
      }
    } catch (error) {
      console.error(error);
    }
  }
  console.table("added video to playlist outside", playlist);

  async function removeFromPlaylist(playlistId, videoId, setPlaylist) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId}/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log(response);
      if (response.status === 200) {
        setPlaylist(prev => prev.map(playlist => playlist._id === response.data.playlist._id ? response.data.playlist : playlist));
        console.table("removed video from inside playlists", response.data.playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }
  console.table("removed video from playlists", playlist);

  const value = {
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
  };
  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistProvider, usePlaylistContext };
