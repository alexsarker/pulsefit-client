const Banner = ({ heading, image }) => {
  return (
    <div
      className="hero h-96 rounded-2xl mb-24"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-piccolo opacity-50 rounded-2xl"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
