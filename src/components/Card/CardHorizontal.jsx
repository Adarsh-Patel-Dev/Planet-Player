
import React from 'react'
import './card.css'
import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";

function CardHorizontal() {
  return (
    <div className="card">
           
            <div className="card--image">
                <img src='https://i.ytimg.com/vi/Ir7dFd9Oflw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTaMoMZZfxlblwsVcy_XpOxnV17Q' className="img-fluid" alt="Plant-Image" width="400px" height="20px"/>

                <ul className='card--options'>
                    <li><MdOutlineWatchLater/></li>
                    <li><MdPlaylistPlay/></li>
                    <li><BiLike/></li>
                </ul>

                <span className='duration-label'>10:25</span>
            </div>

            <div className="card--body">
                <div className="card--details">
                    <div className='channel-logo'>
                        <img className='logo-img' src='https://yt3.ggpht.com/ytc/AKedOLRKuH4PmoGusmEx6k2R6HJZaMggIA_cMt3lvO6t_Q=s68-c-k-c0x00ffffff-no-rj'/>
                    </div>
                    <h4 className="card--title">Title of the video is here </h4>
 
                </div>

                <div className="card--footer">
                   
                    <div className="card-channel">Channel name</div>
                    <div className="card-views">6M views . 2 years ago</div>
                </div>
            </div>
        </div>
  )
}

export { CardHorizontal }