import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Img2 from "/src/assets/authentication/img2.svg";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const { signUser, googleIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUser(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("You're In");
      })
      .catch(() => {
        toast.error("Already exist email!");
      });
  };

  const handleGoogle = () => {
    googleIn()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login Successfully");
      })
      .catch(() => {
        toast.error("Something Wrong");
      });
  };
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col md:gap-20 lg:gap-40 lg:flex-row-reverse mb-24">
          <img src={Img2} alt="Image" />
          <div className="card shrink-0 w-96">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-4">
              <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow"
                    placeholder="Password"
                    {...register("password", {
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    required
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <IoEyeOffOutline className="text-xl" />
                    ) : (
                      <IoEyeOutline className="text-xl" />
                    )}
                  </span>
                </label>

                {(errors.password?.type === "required" && (
                  <div className="label">
                    <span className="label-text-alt text-red-500">
                      Password is required
                    </span>
                  </div>
                )) ||
                  (errors.password?.type === "minLength" && (
                    <div className="label">
                      <span className="label-text-alt text-red-500">
                        Password must be 6 characters
                      </span>
                    </div>
                  )) ||
                  (errors.password?.type === "maxLength" && (
                    <div className="label">
                      <span className="label-text-alt text-red-500">
                        Password must be less than 20 characters
                      </span>
                    </div>
                  )) ||
                  (errors.password?.type === "pattern" && (
                    <div className="label">
                      <span className="label-text-alt text-red-500">
                        Password must be one Uppercase, One Lowercase, one
                        Numeric and one Special Character
                      </span>
                    </div>
                  )) || (
                    <div className="label">
                      <span className="label-text-alt">
                        Password must be at least 8 characters.
                      </span>
                    </div>
                  )}
              </div>
              <div className="form-control mt-4">
                <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
                  Sign In
                </button>
              </div>
              <div className="divider text-trunks">or</div>
              <button
                onClick={() => handleGoogle()}
                className="border p-2 rounded-full mx-auto"
              >
                <FcGoogle className="text-2xl" />
              </button>
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
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    </>
  );
};

export default Login;
