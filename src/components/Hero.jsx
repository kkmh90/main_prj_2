import video from "../video/sample.mp4";
import React from "react";
import TypingText from "../components/Typing.jsx";
import colors, { white } from "tailwindcss/colors";
import "./Cursor.css";

export default function Hero() {
  return (
    <section>
      <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden brightness-60">
        <video muted autoPlay loop playsInline>
          <source src={video}></source>
        </video>
        <div
          className=""
          style={{
            position: "absolute",
          }}
        >
          <TypingText
            className="text"
            text="오모로봇입니다."
            speed={140}
            fontSize="4rem"
            color={white}
          />
          <p className="cursor"></p>
        </div>
      </div>
    </section>
  );
}
