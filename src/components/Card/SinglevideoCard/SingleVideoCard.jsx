
import React from 'react'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike,  } 
from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import {useParams } from 'react-router-dom';
import { useVideoListing } from '../../../context/video-listing-context.js';
import '../card.css'
import './singlevideo.css'

function SingleVideoCard() {

  const {videoId} = useParams();
  console.log(videoId);

  const { videoList } = useVideoListing();

  console.log( videoList , 'this is from single videopage')

  const filteredVideo = videoList.filter(video=>video._id === videoId)

  console.log(filteredVideo)

  const { _id, title, creator, creater_img, thumbnailUrl, description, video_id, duration, old, views } = filteredVideo[0]

  console.log(description,'desc')
  const videourl = `https://www.youtube.com/embed/${video_id}`

  return (
    <div className='card--single-video'>
      <div className="card--image--single-video">
                
       <iframe  className='iframe' width="1100" height="620" src= {videourl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
       </iframe>
        <span className='duration-label'>{duration}</span>
      </div> 

       <div className="card--body--single-video">

                <div className="card--details--singlevideo">
                    <h4 className="card--title">{title}</h4>
                    <div className="card-views">{views} . {old}</div>
                    <div className="actions-buttons">
                      <span><AiOutlineLike/>10k</span>
                      <span><AiOutlineDislike/></span>
                      <span><MdPlaylistAdd/></span>
                      <span><MdOutlineWatchLater/></span>
                    </div>
 
                </div>
                <hr/>
                <div className="card--footer">
                    <div className='channel-looogo'>
                        <img className='logo-img' src={creater_img} alt='logo'/>
                    </div>
                   
                   <div className='card-footer-singlevideo'>
                    <div className="card-channel">{creator}</div>
                    <div className="card-channel-subscribers">10M Subscribers</div>
                    <div className="card-channel-desc">{description}</div>
                    </div>

                </div>
            </div>
    </div>

    
  )
}

export { SingleVideoCard }