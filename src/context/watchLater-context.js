import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const WatchLaterContext = createContext();
const useWatchLaterContext = () => useContext();

const WatchLaterProvider = ({children}) => {
    const [watchLater, setWatchLater] = useState([])

    async function getWatchLater(){

        const response = await axios({
            method: 'GET',
            url: '/api/user/watchlater',
          headers: { authorization: localStorage.getItem('token') },
        })
        if(response.status === 200){
            setWatchLater(response.data.watchLater)
        }
    }
    
    async function addToWatchLater(){

        const response = await axios({
            method: 'POST',
            url: '/api/user/watchlater',
          headers: { authorization: localStorage.getItem('token') },
        })
        if(response.status === 201){
            setWatchLater(response.data.watchLater)
        }
    }
    async function removeFromWatchLater(videoId){

        const response = await axios({
            method: 'DELETE',
            url: `/api/user/watchlater/${videoId}`,
          headers: { authorization: localStorage.getItem('token') },
        })
        if(response.status === 200){
            setWatchLater(response.data.watchLater)
        }
    }

    return(
        <WatchLaterContext.Provider value={{watchLater, addToWatchLater, removeFromWatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    )

}

export { useWatchLaterContext, WatchLaterProvider };