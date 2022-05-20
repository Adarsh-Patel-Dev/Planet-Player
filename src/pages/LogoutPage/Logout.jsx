import { useNavigate } from "react-router-dom";
import "./logout.css";


const Logout = () => {
    const navigate = useNavigate();
  return (
    <div className="main">
      <img
        className="bg-img"
        src="https://i.pinimg.com/originals/ba/04/18/ba041809feb1758c174c9ee20e13d881.jpg"
        alt=""
      />
      <div className="signup-page-logout">
        <h2 className="signup-title">Log Out</h2>
        <span className="signup-span">You are Logged Out </span>

        <button className="btn-login"
        onClick={()=>navigate("/login",{ state:{from: { pathname: "/"}}})}
        >
          Login
        </button>
        <button 
        onClick={()=>navigate("/signup",{ state:{from: { pathname: "/"}}})}
        className="btn-login outline">
          Signup
        </button>
      </div>
    </div>
  );
};

export { Logout };
