import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Img2 from "/src/assets/authentication/img2.svg";

const Login = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col md:gap-20 lg:gap-40 lg:flex-row-reverse mb-24">
          <img src={Img2} alt="Image" />
          <div className="card shrink-0 w-96">
            <form className="card-body gap-4">
              <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
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
              <div className="form-control mt-4">
                <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
                  Sign In
                </button>
              </div>
              <div className="divider text-trunks">or</div>
              <div className="border p-2 rounded-full mx-auto">
                <FcGoogle className="text-2xl" />
              </div>
              <p className="text-center pt-2">
                Do not have an account?{" "}
                <Link
                  to="/register"
                  className="text-piccolo font-bold underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
