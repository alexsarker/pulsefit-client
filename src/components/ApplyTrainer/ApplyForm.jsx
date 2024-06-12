import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import TimeSelector from "./TimeSelector";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const ApplyForm = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: user.email,
      photo: data.photo,
      age: data.age,
      skills: data.skills,
      startTime: data.startTime,
      endTime: data.endTime,
      experience: data.experience,
      day: data.day,
      bio: data.bio,
      comprehensiveInformation: {
        certifications: data.certifications,
        achievements: data.achievements,
        philosophy: data.philosophy,
      },
      phone: data.phone,
      location: data.location,
      socials: {
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
      },
      status: "pending",
    };
    console.log(formData);

    axios
      .post("http://localhost:5000/apply", formData)
      .then((res) => {
        console.log(res.data);
        toast.success("Application submitted successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to submit application");
      });
  };

  return (
    <>
      <Helmet>
        <title>Pulsefit | Apply Trainer</title>
      </Helmet>
      <div className="card shrink-0 w-max mx-auto mb-24">
        <div>
          <h2 className="text-3xl font-bold">Fill the Form</h2>
          <p>We will contact with you soon!</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body gap-4 grid lg:grid-cols-2"
        >
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Full Name</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              required
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Age</h2>
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered w-72"
              min={0}
              max={99}
              required
              {...register("age")}
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Phone Number</h2>
            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered"
              required
              {...register("phone")}
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Location</h2>
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered w-72"
              required
              {...register("location")}
            />
          </div>
          <div className="form-control md:col-span-2 lg:col-span-2">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Bio"
              required
              {...register("bio")}
            ></textarea>
          </div>
          <div className="form-control col-span-2 my-4">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="grid grid-cols-2">
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    value="Strength Training"
                    {...register("skills")}
                  />
                  <option className="label-text">Strength Training </option>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    value="Weight Loss"
                    {...register("skills")}
                  />
                  <option className="label-text">Weight Loss</option>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    value="Yoga"
                    {...register("skills")}
                  />
                  <option className="label-text">Yoga</option>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    value="Pilates"
                    {...register("skills")}
                  />
                  <option className="label-text">Pilates</option>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs"
                    value="Meditation"
                    {...register("skills")}
                  />
                  <span className="label-text">Meditation</span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Image URL</h2>
            <input
              type="url"
              placeholder="https://"
              className="input input-bordered"
              required
              {...register("photo")}
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Years of Experience</h2>
            <input
              type="number"
              placeholder="Years of Experience"
              className="input input-bordered"
              min={0}
              required
              {...register("experience")}
            />
          </div>

          <div className="pt-20 col-span-2">
            <h1 className="text-2xl font-semibold text-center">
              Class Schedule
            </h1>
            <div className="divider"></div>
          </div>

          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Start Time</h2>
            <TimeSelector registerHook={register} name="startTime" />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">End Time</h2>
            <TimeSelector registerHook={register} name="endTime" />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Day</h2>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("day")}
              required
            >
              <option value="" hidden>
                Select
              </option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
            </select>
          </div>

          <div className="pt-20 col-span-2">
            <h1 className="text-2xl font-semibold text-center">
              Comprehensive Information
            </h1>
            <div className="divider"></div>
          </div>

          <div className="form-control md:col-span-2 lg:col-span-2">
            <h2 className="text-lg font-semibold pb-2">Certifications</h2>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Certifications"
              required
              {...register("certifications")}
            ></textarea>
          </div>
          <div className="form-control md:col-span-2 lg:col-span-2">
            <h2 className="text-lg font-semibold pb-2">Achievements</h2>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Achievements"
              required
              {...register("achievements")}
            ></textarea>
          </div>
          <div className="form-control md:col-span-2 lg:col-span-2">
            <h2 className="text-lg font-semibold pb-2">Philosophy</h2>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Philosophy"
              required
              {...register("philosophy")}
            ></textarea>
          </div>

          <div className="pt-20 col-span-2">
            <h1 className="text-2xl font-semibold text-center">
              Socials
            </h1>
            <div className="divider"></div>
          </div>

          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Facebook</h2>
            <input
              type="url"
              placeholder="https://"
              className="input input-bordered"
              required
              {...register("facebook")}
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Instagram</h2>
            <input
              type="url"
              placeholder="https://"
              className="input input-bordered"
              required
              {...register("instagram")}
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Twitter</h2>
            <input
              type="url"
              placeholder="https://"
              className="input input-bordered"
              required
              {...register("twitter")}
            />
          </div>

          <div className="form-control mt-4 md:col-span-2 lg:col-span-2">
            <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
              Apply Now
            </button>
          </div>
        </form>
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    </>
  );
};

export default ApplyForm;
