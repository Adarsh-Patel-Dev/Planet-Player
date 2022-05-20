import React from "react";
import { useAuthContext } from "../../context/auth-context";
import { AiOutlineUser } from "../../Assets/Icons";
import "./avatar.css"

function Avatar() {
  const { userName } = useAuthContext();
  const firstAlphabet = userName.charAt(0).toUpperCase();

  return userName ? (
    <div className="avatar--text">
      <span className="userName-firstChar">{firstAlphabet}</span>
      <span className="userName">{userName}</span>
    </div>
  ) : (
    <div className="avatar--text">
      <span className="userName-firstChar"><AiOutlineUser/></span>
    </div>
  );
}

export { Avatar };
