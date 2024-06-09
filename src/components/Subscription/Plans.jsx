import { CiCircleCheck } from "react-icons/ci";
import { PiCrownLight } from "react-icons/pi";
import { VscFlame, VscRocket } from "react-icons/vsc";

const Plans = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 mb-24">
          <div className="card border">
            <div className="flex items-center gap-4 pt-10 px-10">
              <VscRocket className="text-6xl text-krillin p-4 bg-krillin-10 rounded-full" />
              <h4 className="font-bold text-2xl">Basic</h4>
            </div>
            <div className="card-body">
              <h2 className="text-7xl font-medium text-center">
                $10<small className="text-2xl">/month</small>
              </h2>
              <div className="py-8">
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">
                    Access to gym facilities during regular hours
                  </p>
                </div>
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">
                    Use of cardio and strength training equipment
                  </p>
                </div>
                <div className="flex  gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">Access to locker rooms and showers</p>
                </div>
              </div>
              <div className="card-actions mx-auto">
                <button className="btn w-32 bg-krillin text-white hover:bg-[#EB9F05]">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border">
            <div className="flex items-center gap-4 pt-10 px-10">
              <VscFlame className="text-6xl text-whis p-4 bg-whis-10 rounded-full" />
              <h4 className="font-bold text-2xl">Standard</h4>
            </div>
            <div className="card-body">
              <h2 className="text-7xl font-medium text-center">
                $50<small className="text-2xl">/month</small>
              </h2>
              <div className="py-8">
                <div className="flex gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">All benefits of Basic Membership</p>
                </div>
                <div className="flex gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">
                    Access to group fitness classes such as yoga, spinning, and
                    Zumba
                  </p>
                </div>
                <div className="flex gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">
                    Use of additional amenities like a sauna or steam room
                  </p>
                </div>
              </div>
              <div className="card-actions mx-auto">
                <button className="btn w-32 bg-whis text-white hover:bg-[#2034DC]">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border">
            <div className="flex items-center gap-4 pt-10 px-10">
              <PiCrownLight className="text-6xl text-chichi p-4 bg-chichi-10 rounded-full" />
              <h4 className="font-bold text-2xl">Premium</h4>
            </div>
            <div className="card-body">
              <h2 className="text-7xl font-medium text-center">
                $100<small className="text-2xl">/month</small>
              </h2>
              <div className="py-8">
                <div className="flex gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">
                    All benefits of Standard Membership
                  </p>
                </div>
                <div className="flex gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">
                    Access to personal training sessions with certified trainers
                  </p>
                </div>
                <div className="flex gap-2">
                  <CiCircleCheck className="text-piccolo text-lg mt-1" />
                  <p className="max-w-80">
                    Discounts on additional services such as massage therapy or
                    nutrition counseling
                  </p>
                </div>
              </div>
              <div className="card-actions mx-auto">
                <button className="btn w-32 bg-chichi text-white hover:bg-[#EB3A50]">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
