import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { AiOutlineDelete } from "react-icons/ai";

const AllTrainers = () => {
  return (
    <div>
      <Breadcrumbs
        router="/dashboard/appliedTrainer"
        routeName="All Trainers"
      />
      <DashTitle
        headline="All Trainers"
        subHeadline="Manage and Review All Registered Trainers"
      />

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Trainer Name</th>
              <th>Available Slots</th>
              <th>Years of Experience</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="flex space-x-4 items-center">
                  <img src="" className="avatar rounded-full w-6 h-6" />
                  <p>Madison Roy</p>
                </div>
              </td>
              <td>Monday 8 AM - 10 AM</td>
              <td>10+ Years</td>
              <td>
                <div className="flex space-x-8 justify-center">
                  <AiOutlineDelete className="text-2xl text-dodoria" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTrainers;
