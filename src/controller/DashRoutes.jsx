import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { MdOutlineClass, MdOutlineForum, MdPostAdd } from "react-icons/md";
import { HiOutlineNewspaper, HiOutlineUsers } from "react-icons/hi2";
import { LuLayoutDashboard, LuUserPlus } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import useAuth from "../hooks/useAuth";
import { GoHome } from "react-icons/go";
import { TbLogs } from "react-icons/tb";
import { RiContactsBook3Line } from "react-icons/ri";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex">
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn bg-main text-white hover:bg-[#E7811B] lg:hidden"
            >
              Menu
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-8 w-80 min-h-full border-r space-y-4">
              {/* Sidebar content here */}
              <div>
                <img src={Logo} alt="logo" className="pb-4" />
              </div>
              {/* admin */}
              {/* <div>
              <div>
                <li>
                  <Link
                    to="/dashboard"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <LuLayoutDashboard className="text-base" />
                    <span>Admin Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="allTrainers"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <HiOutlineUsers className="text-base" />
                    <span>All Trainers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="allForums"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <MdOutlineForum className="text-base" />
                    <span>All Forum Posts</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="allClasses"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <MdOutlineClass className="text-base" />
                    <span>All Classes</span>
                  </Link>
                </li>
              </div>
              <div className="divider"></div>
              <div>
                <div>
                  <h4 className="text-trunks pb-4">User Enlist</h4>
                </div>
                <li>
                  <Link
                    to="appliedTrainers"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <LuUserPlus className="text-base" />
                    <span>Applied Trainers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="subscribers"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <HiOutlineNewspaper className="text-base" />
                    <span>Newsletter Subscribers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="finance"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <CiWallet className="text-base" />
                    <span>Financial Overview</span>
                  </Link>
                </li>
              </div>
            </div> */}

              {/* trainer */}
              {/* <div>
              <li>
                <Link
                  to="/dashboard"
                  className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                >
                  <LuLayoutDashboard className="text-base" />
                  <span>Trainer Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="manageSlots"
                  className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                >
                  <HiOutlineUsers className="text-base" />
                  <span>Manage Slots</span>
                </Link>
              </li>
              <li>
                <Link
                  to="addForum"
                  className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                >
                  <MdPostAdd className="text-base" />
                  <span>Add New Forum</span>
                </Link>
              </li>
            </div> */}

              {/* member */}
              <div>
                <li>
                  <Link
                    to="/dashboard"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <LuLayoutDashboard className="text-base" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="logs"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <TbLogs className="text-base" />
                    <span>Activity Logs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="bookedTrainers"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <RiContactsBook3Line className="text-base" />
                    <span>Booked Trainers</span>
                  </Link>
                </li>
              </div>

              <div className="divider"></div>
              <div>
                <div>
                  <h4 className="text-trunks pb-4">Others</h4>
                </div>
                <li>
                  <Link
                    to="/"
                    className="py-4 hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                  >
                    <GoHome className="text-base" />
                    <span>Home</span>
                  </Link>
                </li>
              </div>
              <div className="divider"></div>
              <li>
                <Link
                  to="/profile"
                  className="hover:font-bold hover:text-[#4E46B4] hover:bg-[#4E46B41F]"
                >
                  <img
                    src={user.photoURL}
                    alt="user photo"
                    className="w-14 avatar rounded-full"
                  />
                  <span className="text-base">{user.displayName}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-10 mt-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
