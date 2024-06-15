import { CgProfile } from "react-icons/cg";
import { RiContactsBook3Line } from "react-icons/ri";
import { TbLogs } from "react-icons/tb";
import { Link } from "react-router-dom";
import DashBan from "../../components/DashComp/DashBan";
import DashTitle from "../../components/DashComp/DashTitle";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";


const MemberBoard = () => {
    return (
        <div>
        <Breadcrumbs routeName={"Dashboard"} router={"/dashboard"} />
        <DashTitle
          headline={"Dashboard"}
          subHeadline={
            "Welcome to Your Member Dashboard - Manage Your Activities and Explore Classes"
          }
        />
        <div>
          <DashBan />
          <div className="flex gap-6 mt-16">
            <Link to="/dashboard/logs">
              <div className="p-8 border hover:border-[#FFB319] w-max rounded-2xl space-y-4">
                <TbLogs className="text-6xl p-4 bg-krillin-10 text-krillin rounded-2xl" />
                <p>Activity Logs</p>
              </div>
            </Link>
            <Link to="/dashboard/bookedTrainers">
              <div className="p-8 border hover:border-[#FF4E64] w-max rounded-2xl space-y-4">
                <RiContactsBook3Line className="text-6xl p-4 bg-chichi-10 text-chichi rounded-2xl" />
                <p>Booked Trainers</p>
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

export default MemberBoard;