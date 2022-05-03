import axios from "axios";
import { createContext, useContext, useState } from "react";

const PlaylistContext = createContext();
const usePlaylistContext = () => useContext(PlaylistContext);


const PlaylistProvider = ({children}) => {
    const [ playlist, setPlaylist ] = useState([])

    async function getPlaylists(){
        const response = await axios({
            method:'GET',
            url: '/api/user/playlists',
            headers: { authorization: localStorage.getItem('token')},  
        })

        if(response.status === 200){
            setPlaylist(response.data.playlists)
        }
    }

    async function addPlaylists(playlistName, description){
        const response = await axios({
            method:'POST',
            url: '/api/user/playlists',
            headers: { authorization: localStorage.getItem('token')}, 
            playlist: { title: `${playlistName}`, description:`${description}`} 
        })

        if(response.status === 201){
            setPlaylist(response.data.playlists)
        }
    }

    async function removePlaylist (playlistId){
        const response = axios({
            method: 'DELETE', 
            url: `/api/user/playlists/${playlistId}`,
            headers: { authorization: localStorage.getItem('token')}
        })
        if( response.status === 200){
            setPlaylist(response.data.playlists)
        }
    }

    async function getPlaylist(playlistId){
        const response = await axios({
            method:'GET',
            url: `/api/user/${playlistId}`,
            headers: { authorization: localStorage.getItem('token')},  
        })

        if(response.status === 200){
            setPlaylist(response.data.playlist)
        }
    }

    async function addToPlaylist(playlistId, videoId){
        const response = await axios({
            method:'POST',
            url: `/api/user/${playlistId}`,
            headers: { authorization: localStorage.getItem('token')}, 
            video: `${videoId}`
        })

        if(response.status === 201){
            setPlaylist(response.data.playlists)
        }
    }

    async function removeFromPlaylist (playlistId,videoId){
        const response = axios({
            method: 'DELETE', 
            url: `/api/user/playlists/${playlistId}/${videoId}`,
            headers: { authorization: localStorage.getItem('token')}
        })
        if( response.status === 200){
            setPlaylist(response.data.playlist)
        }
    }

    const value = { playlist, setPlaylist, addPlaylists, removePlaylist, getPlaylist, getPlaylists,removeFromPlaylist, addToPlaylist}
    return(
        <PlaylistContext.Provider value={value}>
            {children}
        </PlaylistContext.Provider>
    )

}

export { PlaylistProvider, usePlaylistContext }