import { CgProfile } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import DashBan from "../../components/DashComp/DashBan";
import DashTitle from "../../components/DashComp/DashTitle";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import { MdPostAdd } from "react-icons/md";

const TrainerBoard = () => {
  return (
    <div>
      <Breadcrumbs routeName={"Dashboard"} router={"/dashboard"} />
      <DashTitle
        headline={"Dashboard"}
        subHeadline={
          "Welcome to Your Trainer Dashboard - Manage Your Activities"
        }
      />
      <div>
        <DashBan />
        <div className="flex gap-6 mt-16">
          <Link to="/dashboard/manageSlots">
            <div className="p-8 border hover:border-[#FFB319] w-max rounded-2xl space-y-4">
              <HiOutlineUsers className="text-6xl p-4 bg-krillin-10 text-krillin rounded-2xl" />
              <p>Manage Slots</p>
            </div>
          </Link>
          <Link to="/dashboard/addForum">
            <div className="p-8 border hover:border-[#FF4E64] w-max rounded-2xl space-y-4">
              <MdPostAdd className="text-6xl p-4 bg-chichi-10 text-chichi rounded-2xl" />
              <p>Add New Post</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className="p-8 border hover:border-[#2E7D32] w-max rounded-2xl space-y-4">
              <CgProfile className="text-6xl p-4 bg-roshi-10 text-roshi rounded-2xl" />
              <p>Profile Settings</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerBoard;
