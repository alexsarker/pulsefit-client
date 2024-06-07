import { Link } from "react-router-dom";
import HeroImg from "/src/assets/hero/hero-image.svg";
const Hero = () => {
  return (
    <div className="text-center space-y-5 mt-16 mb-24">
      <h2 className="text-5xl font-bold">
        Unlock Your Potential with Personalized Training
      </h2>
      <p className="max-w-2xl mx-auto text-2xl text-trunks pb-5">
        Our expert trainers are here to guide you every step of the way. Embrace
        a healthier, happier lifestyle with us.
      </p>
      <img src={HeroImg} alt="hero-image" className="mx-auto pb-8" />
      <Link to="/classes">
        <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
          Explore Classes
        </button>
      </Link>
    </div>
  );
};

export default Hero;
