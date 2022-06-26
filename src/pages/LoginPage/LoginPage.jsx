import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import "./login.css";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const encodedToken = localStorage.getItem("token");
  const {
    authState: { email, password },
    authDispatch,
    login,
  } = useAuthContext();

  return (
    <div className="main">
      <img
        className="bg-img"
        src="https://cutewallpaper.org/21/bugatti-chiron-wallpaper-4k/4k-Bugatti-Chiron-Sport-HD-Cars-4k-Wallpapers-Images-.jpg"
        alt=""
      />

      <div className="signup-page">
        <h2 className="signup-title">Log In</h2>
        
          
        <input
          onChange={(e) =>
            authDispatch({ type: "EMAIL", payload: e.target.value })
          }
          value={email}
          type="email"
          className="signup-input"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) =>
            authDispatch({ type: "PASSWORD", payload: e.target.value })
          }
          value={password}
          minlength="6"
          type="password"
          name="password"
          className="signup-input"
          placeholder="Password"
          required
        />
        
       
        <div className="checkbox-signup">
          <label className="signup-label">
          </label>
        </div>

        <button
          className="btn-login"
          onClick={() =>
            login(
              email,
              password,
              navigate,
              location,
              encodedToken
            )
          }
        >
          Login
        </button>
        <button className="btn-login"
         onClick={()=>login("adarshpatel@gmail.com","adarsh@neog",navigate,location,encodedToken)}
        >Test Login</button>

        <span className="signup-span">
         New User ?
          <button
            onClick={() =>
              navigate("/signup", { state: { from: { pathname: "/" } } })
            }
            className="signup-link"
          >
            SignUp
          </button>
        </span>
        
      </div>
    </div>
  );
};


export { Login };
