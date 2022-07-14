import { RepeatOn } from "@mui/icons-material";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Toast } from "../components/Toast/Toast";

const LikedVideoContext = createContext();
const useLikeVideoContext = () => useContext(LikedVideoContext);

const LikedVideoProvider = ({ children }) => {
  const [likedVideo, setLikeVideo] = useState([]);
  const [isLike, setIsLike] = useState(false);

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

  async function addToLikeVideo(video, setLikeVideo, setIsLike) {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/likes",
        headers: { authorization: localStorage.getItem("token") },
        data: { video: video },
      });
      if (response.status === 201) {
        setIsLike(!isLike)
        setLikeVideo(response.data.likes);
        Toast({ type: "success", msg: "Video added to favourites" });
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  async function removeFromLikeVideo(videoId, setLikeVideo,setIsLike) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/likes/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setIsLike(!isLike)
        setLikeVideo(response.data.likes);
        Toast({ type: "info", msg: "Video removed from favourites" });
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  function clearLikedVideos() {
    setLikeVideo([]);
    Toast({ type: "info", msg: "All videos removed from favourites" });
  }

  return (
    <LikedVideoContext.Provider
      value={{
        isLike,
        setIsLike,
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
