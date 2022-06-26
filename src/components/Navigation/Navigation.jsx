import "./navbar.css";
import { Toast } from "../../components/Toast/Toast";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AiOutlineHistory, AiOutlineHome, BiLike } from "../../Assets/Icons";
import {
  MdOutlineWatchLater,
  MdPlaylistPlay,
  MdOutlineExplore,
  MdArrowBack,
  MdOutlineMenu
} from "react-icons/md";
import { Avatar } from "../Avatar/Avatar";

import {
  FaPlayCircle,
  FaRegUserCircle,
  MdLogout,
  MdLogin,
  MdSearch,
  GoThreeBars,
} from "../../Assets/Icons";

const Navigation = () => {
  const token = localStorage.getItem("token");
  const [logout, setLogout] = useState(false);
  const location = useLocation();
  const [display, setDisplay] = useState(false);
  const [ hide, setHide ] = useState(false)

  useEffect(() => {
    if (logout) {
      window.location.reload();
    }
  }, [logout]);

  return (
    <nav className="nav-bar">
      <div className="nav--body">
        <span onClick={() => {
          setHide(!hide)
          setDisplay(true)}} className="burgar-icon">
          <MdOutlineMenu />
        </span>
              
          <div className="nav--header">
          
            <div
              id="mySidenav"
              class="sidenav"
              style={{ display: display ? "block" : "none", transition: "0.5s" }}
            >
                <span class="closebtn" style={{display: hide? "inline":"none"}}>
                <MdArrowBack onClick={() =>{ 
                setDisplay(false)
                setHide(!hide)}} />
              </span>
              <ul className="aside-list">
                <li className="aside-item">
                  <NavLink to="/" className="aside-link flex-row">
                    <AiOutlineHome />
                    <span className="aside-text">Home</span>
                  </NavLink>
                </li>

                <li className="aside-item">
                  <NavLink to="/videolisting" className="aside-link flex-row">
                    <MdOutlineExplore />
                    <span className="aside-text">Explore</span>
                  </NavLink>
                </li>

                <li className="aside-item">
                  <NavLink to="/history" className="aside-link flex-row">
                    <AiOutlineHistory />
                    <span className="aside-text">History</span>
                  </NavLink>
                </li>

                <li className="aside-item">
                  <NavLink to="/playlist" className="aside-link flex-row">
                    <MdPlaylistPlay />
                    <span className="aside-text">Playlists</span>
                  </NavLink>
                </li>
                <li className="aside-item">
                  <NavLink to="/likedvideos" className="aside-link flex-row">
                    <BiLike />
                    <span className="aside-text">Favourite</span>
                  </NavLink>
                </li>
                <li className="aside-item">
                  <NavLink to="/watchlater" className="aside-link flex-row">
                    <MdOutlineWatchLater />
                    <span className="aside-text">WatchLater</span>
                  </NavLink>
                </li>
              </ul>
            </div>

<Link to="/">

            <h2 class="nav--title">
              Pl
              <span className="logo-icon">
                <FaPlayCircle />
              </span>
              ynet
            </h2>
        </Link>
          </div>
        {/* <div className="nav--search">
          <input
            type="text"
            placeholder="Search here"
            className="nav--search--input"
          />
          <button className="nav--search--btn">
            <MdSearch />
          </button>
        </div> */}

        <div className="nav--links">
          <ul className="nav--list">
            <li className="nav--item">
              {!token ? (
                <NavLink
                  to="/signup"
                  className="nav--link"
                  state={{ from: location }}
                >
                  <span className="nav--link link-btn btn-solid">Signup</span>
                </NavLink>
              ) : (
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  {/* <Avatar/> */}
                  <NavLink
                    to="/logout"
                    className="nav--link"
                    onClick={() => {
                      setLogout(true);
                      localStorage.clear();
                      Toast({ type: "info", msg: "You have logged out." });
                    }}
                  >
                    <span className="nav--link link-btn btn-solid">Logout</span>
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
