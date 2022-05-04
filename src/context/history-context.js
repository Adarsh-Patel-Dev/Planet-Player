import axios from "axios";
import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();
const useHistoryContext = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  async function getHistory() {
    const response = await axios({
      method: "GET",
      url: "/api/user/history",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      setHistory(response.data.history);
      console.log("all history", history);
    }
  }

  async function addToHistory(video, setHistory) {
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
    }
  }

  async function removeFromHistory(videoId) {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/history/${videoId}`,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      setHistory(response.data.history);
    }
  }

  async function clearHistory() {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/history/all`,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      setHistory(response.data.history);
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
