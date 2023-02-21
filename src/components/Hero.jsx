import video from "../video/sample.mp4";

export default function Hero() {
  return (
    <section>
      <div>
        <video
          muted
          autoPlay
          loop
          playsInline
          className="z-0 h-screen w-screen"
        >
          <source src={video}></source>
        </video>
      </div>
      <div className="text-white z-10 text-center relative">
        <p>Hero</p>
      </div>
    </section>
  );
}
