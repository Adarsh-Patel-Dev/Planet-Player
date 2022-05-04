import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoListingContext = createContext();
const useVideoListing = () => useContext(VideoListingContext);

const VideoListingProvider = ({ children }) => {
  const [videoList, setVideolist] = useState([]);
  const [category, setCategory] = useState([]);

  async function getVideoData() {
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200) {
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
    try{
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
    const response = await axios({
      method: "GET",
      url: `/api/categories/${categoryId}`,
    });

    if (response.status === 200) {
      setCategory(response.data.category);
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
      }}
    >
      {children}
    </VideoListingContext.Provider>
  );
};

export { useVideoListing, VideoListingProvider };
