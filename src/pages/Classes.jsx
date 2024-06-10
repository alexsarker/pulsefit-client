import { Helmet } from "react-helmet-async";

const Classes = () => {
  return (
    <>
      <Helmet>
        <title>Pulsefit | Classes</title>
      </Helmet>
      <div className="mb-24">
        <div className="text-center space-y-5 mt-16 mb-16">
          <h2 className="text-5xl font-bold">Explore Our Classes </h2>
          <p className="max-w-2xl mx-auto text-2xl text-trunks pb-5">
            Find the Perfect Class to Meet Your Fitness Goals
          </p>
          <label className="input input-bordered w-96 mx-auto flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
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
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <div className="card card-side">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="class image"
                className="rounded-2xl h-56"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Yoga</h2>
              <p>A calming class focused on stretching and mindfulness.</p>
              <div className="flex gap-4 items-center">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral text-neutral-content">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
                <p className="text-piccolo">Bookings (150)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="join mt-12 flex justify-center">
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
    </>
  );
};

export default Classes;
