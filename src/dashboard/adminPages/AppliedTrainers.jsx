import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { Toaster } from "react-hot-toast";
import { IoEyeOutline } from "react-icons/io5";
import { PiUserSwitchLight } from "react-icons/pi";
import { FcCancel } from "react-icons/fc";
import { Link } from "react-router-dom";

const AppliedTrainers = () => {
  return (
    <div>
      <Breadcrumbs
        router="/dashboard/appliedTrainers"
        routeName="Applied Trainers"
      />
      <DashTitle
        headline="Applied Trainers"
        subHeadline="Review and Approve New Trainer Applications"
      />

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Applicant Name</th>
              <th>Age</th>
              <th>Skills</th>
              <th>Available Days/Times</th>
              <th>Years of Experience</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="flex space-x-4 items-center">
                  <img src="" className="avatar rounded-full w-6 h-6" />
                  <p>Corina McCoy</p>
                </div>
              </td>
              <td>20</td>
              <td>Yoga, Pilates</td>
              <td>Monday 8 AM - 10 AM</td>
              <td>10+ Years</td>
              <td>
                <div className="flex space-x-8 justify-center">
                  <Link to="/dashboard/appliedTrainerDetail">
                    <IoEyeOutline className="text-2xl text-whis" />
                  </Link>
                  <PiUserSwitchLight className="text-2xl text-roshi" />
                  <FcCancel className="text-2xl text-dodoria" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AppliedTrainers;
