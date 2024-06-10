import axios from "axios";
import Frame from "/src/assets/hero/Frame.svg";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";
import { useState } from "react";
const NewsletterForm = () => {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState();
  const { user } = useAuth();
  const today = new Date();
  const formattedDate = format(today, "MMMM d, yyyy");

  const onSubmit = (data) => {
    const emailInfo = {
      name: user.displayName,
      photo: user.photoURL,
      email: data.email,
      date: formattedDate,
    };
    setSuccess("");
    axios.post("http://localhost:5000/subscribes", emailInfo).then((res) => {
      if (res.data.insertedId) {
        setSuccess("Subscribed Successfully");
        return;
      }
    });
  };

  return (
    <div className="mb-24 flex justify-center">
      <div className="hero bg-piccolo rounded-2xl border-t-4 border-chichi text-white max-w-5xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Frame} />
          <div>
            <h1 className="text-4xl pl-8 pt-6 font-bold max-w-md">
              Stay Updated with Our Latest News!
            </h1>
            <p className="py-6 pl-8 max-w-md">
              Don’t miss out on our latest updates, fitness tips, exclusive
              offers, and much more! Join our community and get all the latest
              news delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control gap-5">
                <input
                  type="email"
                  placeholder="Email address"
                  className="input w-full max-w-xs text-black"
                  {...register("email")}
                  required
                />
                {success && <span className="text-green-500">{success}</span>}
                <div className="form-control">
                  <button className="btn btn-white w-40 text-piccolo border-none hover:bg-[#2A2473] hover:text-white">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
