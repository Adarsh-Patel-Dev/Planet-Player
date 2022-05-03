import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoListingContext = createContext();
const useVideoListing = () => useContext(VideoListingContext)


const VideoListingProvider = ({ children}) => {
    
    const [videoList, setVideolist] = useState([]);
    const [category, setCategory] = useState([]);

    async function getVideoData() {
        try {
            const response = await axios.get('/api/videos');
            if(response.status === 200){
                setVideolist(response.data.videos)
                console.log('res from videolisting',response.data.videos)
            }
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
     getVideoData();
      }, []);
      console.log("....................")
      console.log('this is response', videoList)

          console.log(videoList,'this is videolist')


          async function getAllCategory(){
              const response = await axios({
                  method: 'GET',
                  url: '/api/categories'
              })

              if(response.status === 200){
                  setCategory(response.data.categories)
              }
          }

          async function getCategory(categoryId){
              const response = await axios({
                  method: 'GET',
                  url: `/api/categories/${categoryId}`
              })

              if(response.status === 200){
                  setCategory(response.data.category)
              }
          }

    
    return (
        <VideoListingContext.Provider value={{videoList, setVideolist, category, setCategory, getAllCategory, getCategory}}>
            {children}
        </VideoListingContext.Provider>
    )
}

export { useVideoListing, VideoListingProvider };