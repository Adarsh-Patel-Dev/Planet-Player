import "./asidebar.css";
import {  } from "react-icons/bi";
import { AiOutlineHistory, AiOutlineHome ,BiLike} from "../../Assets/Icons";
import { NavLink } from "react-router-dom";
import {
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdOutlineExplore,
} from "react-icons/md";

const AsideBar = () => {
  return (
    <aside className="aside-container">
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
    </aside>
  );
};

export { AsideBar };
