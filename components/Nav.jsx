import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { FcFeedback } from "react-icons/fc";

export default function Nav() {
  return (
    <div className="nav">
      <div className="ham">
        <BiMenuAltLeft className="icon" />
      </div>
      <div className="log">AMIGOS</div>
      <CiBellOn className="icon" />
    </div>
  );
}
