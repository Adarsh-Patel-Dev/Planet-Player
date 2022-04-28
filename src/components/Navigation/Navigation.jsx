
import "./navbar.css";

import { FaSearch, FaRegHeart, FaShoppingCart, FaPlayCircle,FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";


const Navigation = () => {

    return (
       
        <nav className="nav-bar">
        <div className="nav--body">
            {/* <NavLink to='/'> */}
            <div className="nav--header">
            <h2 class="nav--title">Pl<span style={{color: "green", fontSize:"2rem"}}><FaPlayCircle/></span>ynet</h2>
            </div>
            {/* </NavLink> */}
            <div className="nav--search">
                <input type="text" placeholder="Search here" className="nav--search--input" />
                <button className="nav--search--btn">
                    <FaSearch /> 
                </button>
            </div>

            <div className="nav--links">
                <ul className="nav--list">

                    <li className="nav--item">
                        {/* <NavLink to='/cart' className="nav--link"> */}
                            <FaRegUserCircle className="icons"/>

                        {/* </NavLink> */}
                    </li>
                    <li className="nav--item">
                        <MdLogout className="icons"/>
                    </li> 
                </ul>
            </div>
        </div>

    </nav>
       
    );
}

export { Navigation };