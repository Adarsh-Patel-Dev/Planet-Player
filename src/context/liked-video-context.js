import { RepeatOn } from "@mui/icons-material";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Toast } from "../components/Toast/Toast";

const LikedVideoContext = createContext();
const useLikeVideoContext = () => useContext(LikedVideoContext);

const LikedVideoProvider = ({ children }) => {
  const [likedVideo, setLikeVideo] = useState([]);

  async function getLikeVideo() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/user/likes",
        headers: { authorization: localStorage.getItem("token") },
      });

      if (response.status === 200) {
        setLikeVideo(response.data.likes);
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  async function addToLikeVideo(video, setLikeVideo) {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/likes",
        headers: { authorization: localStorage.getItem("token") },
        data: { video: video },
      });
      if (response.status === 201) {
        setLikeVideo(response.data.likes);
        Toast({ type: "success", msg: "Video added to liked videos" });
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  async function removeFromLikeVideo(videoId, setLikeVideo) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/likes/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setLikeVideo(response.data.likes);
        Toast({ type: "info", msg: "Video removed from liked videos" });
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  function clearLikedVideos() {
    setLikeVideo([]);
    Toast({ type: "info", msg: "All Videos removed from liked videos" });
  }

  return (
    <LikedVideoContext.Provider
      value={{
        likedVideo,
        setLikeVideo,
        getLikeVideo,
        addToLikeVideo,
        removeFromLikeVideo,
        clearLikedVideos,
      }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
};

export { useLikeVideoContext, LikedVideoProvider };
