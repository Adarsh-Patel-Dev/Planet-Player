import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoListingContext = createContext();
const useVideoListing = () => useContext(VideoListingContext);

const VideoListingProvider = ({ children }) => {
  const [videoList, setVideolist] = useState([]);
  const [category, setCategory] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ search, setSearch ] = useState("");
  const [ selectedCategory, setSelectedCategory ] = useState("All");

  async function getVideoData() {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200) {
        // setLoading(false)
        setVideolist(response.data.videos);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getVideoData();
  }, []);

  async function getAllCategory() {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/categories",
      });

      if (response.status === 200) {
        setCategory(response.data.categories);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getCategory(categoryId) {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/categories/${categoryId}`,
      });

      if (response.status === 200) {
        setCategory(response.data.category);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <VideoListingContext.Provider
      value={{
        videoList,
        setVideolist,
        category,
        setCategory,
        getAllCategory,
        getCategory,
        loading,
        search, 
        setSearch,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </VideoListingContext.Provider>
  );
};

export { useVideoListing, VideoListingProvider };
