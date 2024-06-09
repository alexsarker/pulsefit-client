const ApplyForm = () => {
  return (
    <>
      <div className="card shrink-0 w-max mx-auto mb-24">
        <div>
          <h2 className="text-3xl font-bold">Fill the Form</h2>
          <p>We will contact with you soon!</p>
        </div>
        <form className="card-body gap-4 grid lg:grid-cols-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              required
            />
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
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Skills"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Change**"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              placeholder="Years of Experience"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
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
          <div className="form-control">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control md:col-span-2 lg:col-span-2">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Additional Information"
            ></textarea>
          </div>
          <div className="form-control mt-4 md:col-span-2 lg:col-span-2">
            <button className="btn bg-piccolo text-white px-10 hover:bg-[#2A2473]">
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplyForm;
