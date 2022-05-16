import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import { Toast } from "../components/Toast/Toast";
import { createContext, useContext, useState } from "react";

const WatchLaterContext = createContext();
const useWatchLaterContext = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  async function getWatchLater() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/user/watchlater",
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setWatchLater(response.data.watchlater);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addToWatchLater(video, setWatchLater) {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/watchlater",
        headers: { authorization: localStorage.getItem("token") },
        data: { video: video },
      });
      if (response.status === 201) {
        setWatchLater(response.data.watchlater);
        Toast({ type: "success", msg: "Video added to watchlater" });
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  async function removeFromWatchLater(videoId, setWatchLater) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/watchlater/${videoId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      if (response.status === 200) {
        setWatchLater(response.data.watchlater);
        Toast({ type: "info", msg: "Video removed from watchlater" });
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  function clearWatchlater(){
    setWatchLater([])
  }

  return (
    <WatchLaterContext.Provider
      value={{
        setWatchLater,
        watchLater,
        addToWatchLater,
        removeFromWatchLater,
        clearWatchlater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { useWatchLaterContext, WatchLaterProvider };
