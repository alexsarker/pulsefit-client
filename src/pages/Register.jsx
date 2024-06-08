import { CountryDropdown } from "react-country-region-selector";
import Img from "/src/assets/authentication/img.svg";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const [country, setCountry] = useState("");
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col md:gap-20 lg:gap-40 lg:flex-row-reverse mb-24">
          <img src={Img} alt="Image" />
          <div className="card shrink-0 max-w-md">
            <form className="card-body gap-4">
              <h2 className="text-3xl font-bold text-center mb-6">
                Create account
              </h2>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
                <div className="label">
                  <span className="label-text-alt">
                    Add direct link of your uploaded photo
                  </span>
                </div>
              </div>
              <div className="form-control">
                <CountryDropdown
                  value={country}
                  onChange={(val) => setCountry(val)}
                  className="select select-bordered w-full text-trunks"
                  required
                />
                <div className="label">
                  <span className="label-text-alt">
                    Choose your State where are you from
                  </span>
                </div>
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <div className="label">
                  <span className="label-text-alt">
                    Password must be at least 8 characters.{" "}
                  </span>
                </div>
              </div>
              <p className="text-sm">
                I confirm that I am at least 18 years of age, and accept the{" "}
                <span className="font-bold underline link">
                  General Terms & Conditions
                </span>
              </p>
              <div className="form-control mt-4">
                <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
                  Agree and continue
                </button>
              </div>
              <div className="divider text-trunks">or</div>
              <div className="border p-2 rounded-full mx-auto">
                <FcGoogle className="text-2xl" />
              </div>
              <p className="text-center pt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-piccolo font-bold underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
