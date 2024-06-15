import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { HiOutlineUsers } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";

const AdminBoard = () => {
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
              <p>
                Total
                <br />
                Trainers
              </p>
            </div>
            <h2 className="text-6xl text-roshi">6</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-whis-10 rounded-2xl">
            <div className="space-y-4 text-whis">
              <SiGoogleclassroom className="text-3xl" />
              <p>
                Total
                <br />
                Classes
              </p>
            </div>
            <h2 className="text-6xl text-whis">12</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-krillin-10 rounded-2xl">
            <div className="space-y-4 text-krillin">
              <HiOutlineUsers className="text-3xl" />
              <p>
                Total
                <br />
                Forum Posts
              </p>
            </div>
            <h2 className="text-6xl text-krillin">53</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-chichi-10 rounded-2xl">
            <div className="space-y-4 text-chichi">
              <HiOutlineUsers className="text-3xl" />
              <p>
                Total
                <br />
                Subscribers
              </p>
            </div>
            <h2 className="text-6xl text-chichi">123</h2>
          </div>
          <div className="flex items-center justify-between p-8 bg-raditz-10 rounded-2xl">
            <div className="space-y-4 text-raditz">
              <HiOutlineUsers className="text-3xl" />
              <p>
                Total
                <br />
                Payments Received
              </p>
            </div>
            <h2 className="text-6xl text-raditz">16</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
