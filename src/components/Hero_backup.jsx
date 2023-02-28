import heroImg from "../img/IMG_8197.jpg";

export default function Hero() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-fixed"
      style={{
        backgroundImage: "url(/img/IMG_8197.jpg)",
        backgroundSize: "cover",
        backgroundColor: "gray",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* <img src={heroImg} alt="" /> */}
    </div>
  );
}
