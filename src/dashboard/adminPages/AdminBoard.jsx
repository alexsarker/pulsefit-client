import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { HiOutlineUsers } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineForum } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import useApply from "../../hooks/useApply";
import useTrainer from "../../hooks/useTrainer";
import useClass from "../../hooks/useClass";
import useCommunity from "../../hooks/useCommunity";
import useUser from "../../hooks/useUser";
import useSubscribe from "../../hooks/useSubscribe";

const AdminBoard = () => {
  const [applyData] = useApply();
  const [trainerData] = useTrainer();
  const [classData] = useClass();
  const [forumsData] = useCommunity("/upvotes");
  const [userData] = useUser();
  const [subsData] = useSubscribe();
  return (
    <div>
      <Breadcrumbs routeName={"Admin Dashboard"} router={"/dashboard"} />
      <DashTitle
        headline={"Dashboard"}
        subHeadline={"Overview of Platform Activity and Performance Metrics"}
      />
      <div>
        {/* total info */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex items-center justify-between p-8 bg-roshi-10 rounded-2xl">
            <div className="space-y-4 text-roshi">
              <HiOutlineUsers className="text-3xl" />
              <p className="font-semibold">
                Total
                <br />
                Trainers
              </p>
            </div>
            <h2 className="text-6xl text-roshi">{trainerData.length}</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-whis-10 rounded-2xl">
            <div className="space-y-4 text-whis">
              <SiGoogleclassroom className="text-3xl" />
              <p className="font-semibold">
                Total
                <br />
                Classes
              </p>
            </div>
            <h2 className="text-6xl text-whis">{classData.length}</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-krillin-10 rounded-2xl">
            <div className="space-y-4 text-krillin">
              <MdOutlineForum className="text-3xl" />
              <p className="font-semibold">
                Total
                <br />
                Forum Posts
              </p>
            </div>
            <h2 className="text-6xl text-krillin">{forumsData.length}</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-chichi-10 rounded-2xl">
            <div className="space-y-4 text-chichi">
              <MdOutlineMarkEmailRead className="text-3xl" />
              <p className="font-semibold">
                Total
                <br />
                Subscribers
              </p>
            </div>
            <h2 className="text-6xl text-chichi">{subsData.length}</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-raditz-10 rounded-2xl">
            <div className="space-y-4 text-raditz">
              <MdOutlinePayments className="text-3xl" />
              <p className="font-semibold">
                Total
                <br />
                Users
              </p>
            </div>
            <h2 className="text-6xl text-raditz">{userData.length}</h2>
          </div>
        </div>

        <div className="flex justify-between gap-10 mb-12">
          {/* forums voting */}
          <div className="border p-8 rounded-2xl mt-16 space-y-6 w-2/3 h-max">
            <h4 className="text-xl font-bold">Forum Post Votes</h4>
            <div className="space-y-4">
              {forumsData.slice(0, 10).map((forum, index) => (
                <div
                  key={forum._id}
                  className="flex justify-between items-center mb-4"
                >
                  <p>
                    <span className="mr-4">{index + 1}</span> {forum.title}
                  </p>
                  <div className="flex space-x-4 items-center">
                    <div className="flex items-center gap-2">
                      <BiUpvote className="text-3xl text-roshi p-2 bg-roshi-10 rounded-full" />
                      <p className="text-trunks">{forum.upvotes}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BiDownvote className="text-3xl text-dodoria p-2 bg-dodoria-10 rounded-full" />
                      <p className="text-trunks">{forum.downvotes}</p>
                    </div>
                  </div>
                </div>
              ))}
              {forumsData.length > 10 && (
                <div className="flex justify-center">
                  <Link
                    to="/forum"
                    className="btn btn-sm bg-piccolo text-white hover:bg-[#2A2473]"
                  >
                    View All
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* applied trainers */}
          <div className="border p-8 rounded-2xl mt-16 space-y-6 w-1/3 h-max">
            <h2 className="text-xl font-bold text-center">Applied Trainers</h2>
            {applyData.slice(0, 10).map((trainer) => (
              <div
                key={trainer._id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src={trainer.photo}
                    alt="applied user"
                    className="avatar rounded-full w-8 h-8 mr-4 object-cover"
                  />
                  <Link
                    to={`/dashboard/apply/detail/${trainer._id}`}
                    className="hover:text-[#4E46B4]"
                  >
                    {trainer.name}
                  </Link>
                </div>
                <p className="text-trunks">{trainer.email}</p>
              </div>
            ))}
            {applyData.length > 10 && (
              <div className="flex justify-center">
                <Link
                  to="/dashboard/appliedTrainers"
                  className="btn btn-sm bg-piccolo text-white hover:bg-[#2A2473]"
                >
                  View All
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
