import Fade from "react-reveal/Fade";
import video from "../video/sample.mp4";

export default function Hero() {
  return (
    <div>
      <div
        id="hero"
        className="relative flex items-center justify-center w-screen h-screen overflow-hidden brightness-60"
      >
        <video muted autoPlay loop playsInline>
          <source src={video}></source>
        </video>
        {/* <img src={heroImg} alt="" /> */}
      </div>
      {/* <Fade>
        <div className="absolute top-60 left-16">
          <p className="fixed text-6xl text-white">OMOROBOT</p>
        </div>
      </Fade>

      <div className="absolute top-80 left-16">
        <Fade left>
          <p className="fixed text-4xl text-white">
            To understand the heart and mind of a person,
          </p>
        </Fade>
      </div>

      <div className="absolute top-96 left-16">
        <Fade left>
          <p className="fixed text-4xl text-white">
            look not at what he has already achieved, but at what he aspires to
            do.
          </p>
        </Fade> */}
      {/* </div> */}
    </div>
  );
}
