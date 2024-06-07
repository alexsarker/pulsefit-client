import BG from "/src/assets/hero/Bg.png";

const Follow = () => {
  return (
    <div
      className="hero h-48 bg-cover mix-blend-multiply"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="hero-overlay bg-[#4E46B4] mix-blend-multiply"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
        </div>
      </div>
    </div>
  );
};

export default Follow;
