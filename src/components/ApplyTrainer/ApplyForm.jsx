import { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const ApplyForm = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="card shrink-0 w-max mx-auto mb-24">
        <div>
          <h2 className="text-3xl font-bold">Fill the Form</h2>
          <p>We will contact with you soon!</p>
        </div>
        <form className="card-body gap-4 grid lg:grid-cols-2">
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Full Name</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Age</h2>
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered"
              min={0}
              required
            />
          </div>

          <div className="form-control col-span-2 my-4">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="grid grid-cols-2">
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <span className="label-text">Strength Training </span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <span className="label-text">Weight Loss</span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <span className="label-text">Yoga</span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <span className="label-text">Pilates</span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-xs"
                  />
                  <span className="label-text">Meditation</span>
                </label>
              </div>
            </div>
          </div>

          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Start Time</h2>
            <input
              type="time"
              placeholder="time"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">End Time</h2>
            <input
              type="time"
              placeholder="time"
              className="input input-bordered"
              required
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
            />
          </div>
          <div className="form-control">
            <h2 className="text-lg font-semibold pb-2">Day</h2>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled defaultChecked required>
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
            ></textarea>
          </div>
          <div className="form-control">
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
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
