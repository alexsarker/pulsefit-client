import { TbShieldHalf } from "react-icons/tb";
import SectionTitle from "../SectionTitle";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { LiaCrownSolid } from "react-icons/lia";

const CommunityForums = () => {
  return (
    <div className="mb-24">
      <SectionTitle
        heading={"Community Forums"}
        subHeading={"Join the Discussion and Share Your Insights"}
      />
      <div className="grid place-items-center space-y-6">
        <div className="flex gap-10 p-6 border w-max rounded-2xl">
          <div className="avatar">
            <TbShieldHalf className="relative left-16 top-2 border-2 rounded-full bg-whis text-white border-whis" />
            <div className="w-16 h-max rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl">Benefits of Morning Workouts</h2>
                <p className="text-piccolo text-sm">posted 2 hours ago</p>
              </div>
              <p className="text-trunks max-w-96">
                Discover why morning workouts can boost your energy and
                productivity throughout the day.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <BiUpvote className="text-4xl text-roshi p-2 bg-roshi-10 rounded-full" />
                <p className="text--trunks">120</p>
              </div>
              <div className="flex items-center gap-4">
                <BiDownvote className="text-4xl text-dodoria p-2 bg-dodoria-10 rounded-full" />
                <p className="text--trunks">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 p-6 border w-max rounded-2xl">
          <div className="avatar">
            <LiaCrownSolid className="relative left-16 top-2 border-2 rounded-full bg-krillin text-white border-krillin" />
            <div className="w-16 h-max rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl">Benefits of Morning Workouts</h2>
                <p className="text-piccolo text-sm">posted 2 hours ago</p>
              </div>
              <p className="text-trunks max-w-96">
                Discover why morning workouts can boost your energy and
                productivity throughout the day.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <BiUpvote className="text-4xl text-roshi p-2 bg-roshi-10 rounded-full" />
                <p className="text--trunks">120</p>
              </div>
              <div className="flex items-center gap-4">
                <BiDownvote className="text-4xl text-dodoria p-2 bg-dodoria-10 rounded-full" />
                <p className="text--trunks">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join mt-12 flex justify-center">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </div>
  );
};

export default CommunityForums;
