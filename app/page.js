import Link from "next/link";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { FcFeedback } from "react-icons/fc";
import Nav from "@/components/Nav";
export default function page() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="top-home">
          <Nav />

          <h1>QUIZ AMIGO</h1>
          <h4>
            Be among the Lucky one to pass <br></br> our amaizing questions{" "}
          </h4>
        </div>
        <div className="bottom-home">
          <p>Todays Quiz is on General Knowledge</p>

          <Link href={"/quiz"}>
            <button>Start Quiz</button>
          </Link>
        </div>
      </div>
      <div className="footer">
        {/* <Link href={""}>
          <AiFillHome className="icon" />{" "}
        </Link>
        <Link href={""}>
          <FcFeedback className="icon" />
        </Link>
        <Link href={""}>
          <FcFeedback className="icon" />
        </Link> */}
        <h2>Copyright 2023</h2>
      </div>
    </div>
  );
}
