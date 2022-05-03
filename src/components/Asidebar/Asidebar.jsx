import "./asidebar.css"
import { BiLike,BiUserCircle } from "react-icons/bi";
import { AiOutlineHistory,AiOutlineHome } from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistPlay, MdOutlineExplore } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";


const AsideBar = () =>{
    

    return(
        
        <aside className="aside-container">
            
            {/* <div className="aside-body"> */}

                <ul className="aside-list">
                <NavLink  to = '/'>
                    <li className="aside-item">
                        <a href="#introduction" className="aside-link"><AiOutlineHome/></a>
                        <span className='aside-text'>Home</span>
                    </li>
                   </NavLink>

                   <NavLink to ='/videolisting'>
                    <li className="aside-item">
                        <a href="#introduction" className="aside-link"><MdOutlineExplore/></a>
                        <span className='aside-text'>Explore</span>
                    </li>
                    </NavLink>

                    <NavLink to ='/history'>
                    <li className="aside-item">
                        <a href="#installation" className="aside-link"><AiOutlineHistory/></a>
                        <span className='aside-text'>History</span>
                    </li>
                    </NavLink>

                    <NavLink to ='/watchlater'>
                    <li className="aside-item">
                        <a href="#typography" className="aside-link"><MdOutlineWatchLater/></a>
                        <span className='aside-text'>WatchLater</span>
                    </li>
                    </NavLink>

                    <NavLink to ='/likedvideos'>
                    <li className="aside-item">
                        <a href="/colors/colors.html" className="aside-link"><BiLike/></a>
                        <span className='aside-text'>Favourite</span>
                    </li>
                    </NavLink>

                    <NavLink  to ='/playlist'>
                    <li className="aside-item">
                        <a href="/colors/colors.html" className="aside-link"><MdPlaylistPlay/></a>
                        <span className='aside-text'>Playlists</span>
                    </li>
                    </NavLink>
                </ul>
            {/* </div> */}

        </aside>
     
    )
}

export { AsideBar }