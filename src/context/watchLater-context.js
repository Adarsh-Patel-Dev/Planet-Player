import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const WatchLaterContext = createContext();
const useWatchLaterContext = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  async function getWatchLater() {
    const response = await axios({
      method: "GET",
      url: "/api/user/watchlater",
      headers: { authorization: localStorage.getItem("token") },
    });
    if (response.status === 200) {
      setWatchLater(response.data.watchlater);
    }
  }

  async function addToWatchLater(video, setWatchLater) {
    const response = await axios({
      method: "POST",
      url: "/api/user/watchlater",
      headers: { authorization: localStorage.getItem("token") },
      data: { video: video },
    });
    if (response.status === 201) {
      setWatchLater(response.data.watchlater);
    }
  }

  async function removeFromWatchLater(videoId, setWatchLater) {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${videoId}`,
      headers: { authorization: localStorage.getItem("token") },
    });
    if (response.status === 200) {
      setWatchLater(response.data.watchlater);
    }
  }

  return (
    <WatchLaterContext.Provider
      value={{
        setWatchLater,
        watchLater,
        addToWatchLater,
        removeFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { useWatchLaterContext, WatchLaterProvider };
