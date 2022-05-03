import { RepeatOn } from "@mui/icons-material";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const LikedVideoContext = createContext();
const useLikeVideoContext = () => useContext(LikedVideoContext)

const LikedVideoProvider = ({children}) =>{
    const [likedVideo, setLikeVideo ] = useState([])
    const [addToLikedVideo, setAddToLikedVideo ] = useState([])
    const [removeFromlikedVideo, setRemoveFromlikedVideo ] = useState([])

    async function getLikeVideo(){
        const response = await axios.get({
            method : 'GET',
            url: '/api/user/likes',
            headers: { authorization: localStorage.getItem('token')},

        })

        if(response.status === 200){
            setLikeVideo(response.data.likes)
        }
    }
  
    async function addToLikeVideo(video){
        const response = await axios.post(
            {
                method: 'POST',
                url : '/api/user/likes',
                headers: { authorization: localStorage.getItem('token')},
                data: { video: video }
            }
        )
        if(response.status === 201){
            setLikeVideo(response.data.likes)
        }
    }
    
    async function removeFromLikeVideo(videoId){
        const response = await axios.post(
            {
                method: 'DELETE',
                url : `/api/user/likes/${videoId}`,
                headers: { authorization: localStorage.getItem('token')},
               
            }
        )
        if(response.status === 201){
            setLikeVideo(response.data.likes)
        }
    }

    return(
        <LikedVideoContext.Provider value={{ likedVideo, addToLikedVideo, removeFromlikedVideo}}>
            {children}
        </LikedVideoContext.Provider>
    )
}

export { useLikeVideoContext, LikedVideoProvider }