import "./asidebar.css"
import { BiLike,BiUserCircle } from "react-icons/bi";
import { AiOutlineHistory,AiOutlineHome } from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";


const AsideBar = () =>{
    

    return(
        
        <aside className="aside-container">
            
            {/* <div className="aside-body"> */}

                <ul className="aside-list">
                    <li className="aside-item">
                        <a href="#introduction" className="aside-link"><AiOutlineHome/></a>
                        <span className='aside-text'>Home</span>
                    </li>
                    <li className="aside-item">
                        <a href="#installation" className="aside-link"><AiOutlineHistory/></a>
                        <span className='aside-text'>History</span>

                    </li>
                    <li className="aside-item">
                        <a href="#typography" className="aside-link"><MdOutlineWatchLater/></a>
                        <span className='aside-text'>WatchLater</span>

                    </li>
                    <li className="aside-item">
                        <a href="/colors/colors.html" className="aside-link"><BiLike/></a>
                        <span className='aside-text'>Favourite</span>

                    </li>
                    <li className="aside-item">
                        <a href="/colors/colors.html" className="aside-link"><MdPlaylistPlay/></a>
                        <span className='aside-text'>Playlists</span>

                    </li>
                </ul>
            {/* </div> */}

        </aside>
     
    )
}

export { AsideBar }