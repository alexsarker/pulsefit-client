import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';

const ApplyForm = () => {
  const [value, onChange] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      photo: data.photo,
    };
    console.log(data);

    // axios
    //   .post("http://localhost:5000/apply", formData)
    //   .then((res) => {
    //     console.log(res.data);
    //     toast.success("Application submitted successfully");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     toast.error("Failed to submit application");
    //   });
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
              {...register("fullName")}
            />
          </div>

          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Age</h2>
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered"
              min={0}
              max={99}
              required
              {...register("age")}
            />
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
            <h2 className="text-lg font-semibold pb-2">Start Time</h2>
            <div className="relative">
            <TimePicker onChange={onChange} value={value} />
            </div>
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">End Time</h2>
            <div className="relative">
              <input
                type="time"
                className="input input-bordered w-full"
                required
                {...register("endTime")}
              />
            </div>
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
          <div className="form-control md:col-span-2 lg:col-span-2">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Additional Information"
              required
              {...register("additionalInfo")}
            ></textarea>
          </div>
          <div className="form-control">
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              required
              {...register("file")}
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
