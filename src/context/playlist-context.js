import axios from "axios";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();
const usePlaylistContext = () => useContext(PlaylistContext);

const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  async function getPlaylists() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/user/playlists",
        headers: { authorization: localStorage.getItem("token") },
      });

      if (response.status === 200) {
        setPlaylist(response.data.playlists);
        console.log("all playlists", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function addPlaylists(playlistName, description, setPlaylist) {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/playlists",
        headers: { authorization: localStorage.getItem("token") },
        playlist: { title: `${playlistName}`, description: `${description}` },
      });

      if (response.status === 201) {
        setPlaylist(response.data.playlists);
        console.log("added new playlists", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function removePlaylist(playlistId, setPlaylist) {
    try {
      const response = axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setPlaylist(response.data.playlists);
        console.log("remove one playlists", playlist);
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

      if (response.status === 200) {
        setPlaylist(response.data.playlist);
        console.log("particular playlist", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function addToPlaylist(playlistId, videoId, setPlaylist) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
        video: `${videoId}`,
      });

      if (response.status === 201) {
        setPlaylist(response.data.playlists);
        console.log("added video to playlists", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function removeFromPlaylist(playlistId, videoId, setPlaylist) {
    try {
      const response = axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId}/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setPlaylist(response.data.playlist);
        console.log("removed video from playlists", playlist);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const value = {
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
