import Gateway from "./Gateway";

const BecomeMembership = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="border p-10 space-y-10 max-h-fit items-center rounded-2xl mb-12 w-max">
          <div className="flex gap-5 items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl">John Smith</h4>
              <p className="text-hit">Yoga, Pilates, Meditation</p>
            </div>
          </div>
          <div className="space-x-2">
            <span className="text-white bg-black py-2 px-4 h-full rounded-md">
              Monday 8 AM - 9 AM
            </span>
            <span className="text-white bg-whis py-2 px-4 h-full rounded-md">
              Standard Membership/$50
            </span>
          </div>
          <Gateway />
        </div>
      </div>
    </>
  );
};

export default BecomeMembership;
