import axios from "axios";
import { Toast } from "../components/Toast/Toast";
import { createContext, useContext, useReducer,useState } from "react";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };

    case "PASSWORD":
      return { ...state, password: payload };

    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: payload };

    case "FIRST_NAME":
      return { ...state, firstName: payload };

    case "LAST_NAME":
      return { ...state, lastname: payload };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [userName, setUserName ] = useState('')
  const [authState, authDispatch] = useReducer(AuthReducer, {
    firstName: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  async function signUp(firstName, lastname, email, pasword, navigate, location, encodedToken) {
    try {
      const regExForEmail =  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if(encodedToken){
          Toast({ type: "info", msg: `Hey ${response.data.createdUser.someUserAttribute1}, you're already Logged IN 😎`  });
      }
      if(regExForEmail.test(email)){
        const response = await axios({
        method: "POST",
        url: "/api/auth/signup",
        data: {
          email: email,
          password: pasword,
          someUserAttribute1: firstName,
          someUserAttribute2: lastname,
        },
      });
      if (response.status === 201) {
        localStorage.setItem("token",response.data.encodedToken);
        navigate(location?.state?.from?.pathname, { replace: true})
        Toast({ type: "sucess", msg: `Welcome ${response.data.createdUser.someUserAttribute1}` });
        setUserName(response.data.createdUser.someUserAttribute1)
      }
    } else{
        console.log("Wrong Email format!!!")
        Toast({ type: "error", msg: "Wrong Email format!!!" });
    }
    } catch (error) {
      console.error(error);
      Toast({ type: "error", msg: error });
    }
  }

  async function login(email, password, navigate, location, encodedToken) {
    try {
        if(encodedToken){
            Toast({ type: "info", msg: `Hey ${response.data.createdUser.someUserAttribute1}, you're already Logged IN 😎`  });            
        }
      const response = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: {
          email: email,
          password: password,
        },
      });
      if (response.status === 200) {
        localStorage.setItem("token",response.data.encodedToken);
        navigate(location?.state?.from?.pathname, { replace: true})
        Toast({ type: "success", msg: "Log In successful" });
      }
    } catch (error) {
      console.log(error);
      Toast({ type: "error", msg: error });
    }
  }

  return (
    <AuthContext.Provider value={{ authState, authDispatch, login, signUp, userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthProvider };
