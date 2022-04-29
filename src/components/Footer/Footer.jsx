
import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram,  FaHeart } from "react-icons/fa";
import './footer.css'


function Footer() {
  return (
    <div>
      <footer className='footer'>
         <div >
           <p>Connect with me</p>
          <ul className='social-media-icons'>
            <li><FaLinkedinIn/></li>  
            <li><FaTwitter/></li>  
            <li><FaGithub/></li>  
            <li><FaInstagram/></li>  
          </ul>
            <span>Made with <FaHeart/> by Adarsh </span>
         </div>
         <a href='#' class="btn btn--primary btn--float">
          <MdKeyboardArrowUp className='icon-up'/>       
         </a>
      </footer>
    </div>
  )
}

export { Footer }