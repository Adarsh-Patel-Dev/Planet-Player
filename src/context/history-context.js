import axios from "axios";
import { Toast } from "../components/Toast/Toast";
import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();
const useHistoryContext = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  async function getHistory() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/user/history",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        setHistory(response.data.history);
      }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  async function addToHistory(video, setHistory) {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/history",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        data: { video: video },
      });
      if (response.status === 201) {
        setHistory(response.data.history);
        Toast({ type: "info", msg: "Video added to history" });
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  async function removeFromHistory(videoId) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/history/${videoId}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        setHistory(response.data.history);
        Toast({ type: "info", msg: "Video removed from history" });

      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  async function clearHistory() {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/history/all`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        Toast({ type: "info", msg: "Watch History cleared" });
        setHistory(response.data.history);
      }
    } catch (error) {
      Toast({ type: "error", msg: error });
      console.error(error);
    }
  }

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        getHistory,
        addToHistory,
        removeFromHistory,
        clearHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { useHistoryContext, HistoryProvider };
