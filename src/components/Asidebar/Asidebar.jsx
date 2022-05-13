import "./asidebar.css";
import { BiLike, BiUserCircle } from "react-icons/bi";
import { AiOutlineHistory, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdOutlineExplore,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const AsideBar = () => {
  return (
    <aside className="aside-container">
      {/* <div className="aside-body"> */}

      <ul className="aside-list">
        <li className="aside-item">
          <NavLink to="/" className="aside-link">
            <AiOutlineHome />
            <span className="aside-text">Home</span>
          </NavLink>
        </li>

        <li className="aside-item">
          <NavLink to="/videolisting" className="aside-link">
            <MdOutlineExplore />
            <span className="aside-text">Explore</span>
          </NavLink>
        </li>

        <li className="aside-item">
          <NavLink to="/history" className="aside-link">
            <AiOutlineHistory />
            <span className="aside-text">History</span>
          </NavLink>
        </li>

        <li className="aside-item">
          <NavLink to="/playlist" className="aside-link">
            <MdPlaylistPlay />
            <span className="aside-text">Playlists</span>
          </NavLink>
        </li>
        <li className="aside-item">
          <NavLink to="/likedvideos" className="aside-link">
            <BiLike />
            <span className="aside-text">Favourite</span>
          </NavLink>
        </li>
        <li className="aside-item">
          <NavLink to="/watchlater" className="aside-link">
            <MdOutlineWatchLater />
            <span className="aside-text">WatchLater</span>
          </NavLink>
        </li>
      </ul>
      {/* </div> */}
    </aside>
  );
};

export { AsideBar };
