import { Link } from "react-router-dom";
import BannerImg from "/src/assets/hero/Photo.png";
import { Parallax } from "react-parallax";
const Banner = () => {
  return (
    <div className="mb-24">
      <Parallax
        bgImage={BannerImg}
        bgImageAlt="BannerImg"
        strength={-200}
        className="h-96 rounded-2xl hero"
      >
        <div className="hero-content text-center text-white">
          <div className=" max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Join Our Club</h1>
            <p className="mb-5">
              Take the first step towards a healthier and fitter you. Join our
              community of fitness enthusiasts and get access to top trainers,
              exclusive classes, and personalized fitness plans. Start your
              journey now!
            </p>
            <Link to="/">
              <button className="btn bg-piccolo text-white border-none px-10 hover:bg-[#2A2473]">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
