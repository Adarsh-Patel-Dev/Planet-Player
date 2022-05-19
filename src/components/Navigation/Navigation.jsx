import "./navbar.css";
import { Toast } from "../../components/Toast/Toast";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

  useEffect(() => {
    if (logout) {
      window.location.reload();
    }
  }, [logout]);

  return (
    <nav className="nav-bar">
      <div className="nav--body">
        <NavLink to="/">
          <div className="nav--header">
            <h2 class="nav--title">
              Pl
              <span style={{ color: "green" }}>
                <FaPlayCircle />
              </span>
              ynet
            </h2>
          </div>
        </NavLink>
        <div className="nav--search">
          <input
            type="text"
            placeholder="Search here"
            className="nav--search--input"
          />
          <button className="nav--search--btn">
            <MdSearch />
          </button>
        </div>

        <div className="nav--links">
          <ul className="nav--list">
          {/* <li className="nav--item"><Avatar/></li> */}
            <li className="nav--item">
              {!token ? (
                
                <NavLink
                  to="/login"
                  className="nav--link"
                  state={{ from: location }}
                >
                
                  <span className="nav--link link-btn btn-solid">Login</span>
                </NavLink>
              ) : (<div style={{display:"flex", gap:"1rem", alignItems:"center"}}> 
              <Avatar/>               
              <NavLink
                  to="/logout"
                  className="nav--link"
                  onClick={() => {
                    setLogout(true);
                    localStorage.clear();
                    Toast({ type: "info", msg: "You have logged out."  });
                  } 
                  }
                >
                 
                  <span className="nav--link link-btn btn-solid">Logout</span>
                </NavLink></div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
