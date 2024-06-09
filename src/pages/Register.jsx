import Img from "/src/assets/authentication/img.svg";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, googleIn } = useAuth();
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
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photo).then(() => {
          navigate(from, { replace: true });
          toast.success("Registered Successfully");
        });
      })
      .catch(() => {
        toast.error("Already exist email!");
      });
  };

  const handleGoogle = () => {
    googleIn()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Registered Successfully");
      })
      .catch(() => {
        toast.error("Already Email Exist!");
      });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col md:gap-20 lg:gap-40 lg:flex-row-reverse mb-24">
          <img src={Img} alt="Image" />
          <div className="card shrink-0 max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-4">
              <h2 className="text-3xl font-bold text-center mb-6">
                Create account
              </h2>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  {...register("name")}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo")}
                  required
                />
                <div className="label">
                  <span className="label-text-alt">
                    Add direct link of your uploaded photo
                  </span>
                </div>
              </div>
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
              <button
                onClick={() => handleGoogle()}
                className="border p-2 rounded-full mx-auto"
              >
                <FcGoogle className="text-2xl" />
              </button>
              <p className="text-center pt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-piccolo font-bold underline">
                  Login
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

export default Register;
