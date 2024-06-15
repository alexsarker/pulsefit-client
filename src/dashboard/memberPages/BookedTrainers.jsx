import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { AiOutlineDelete } from "react-icons/ai";

const BookedTrainers = () => {
  return (
    <div>
      <Breadcrumbs
        routeName={"Booked Trainers"}
        router={"/dashboard/bookedTrainers"}
      />
      <DashTitle
        headline={"Booked Trainer"}
        subHeadline={"View and manage all your trainer booked"}
      />

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Trainer Name</th>
              <th>Date & Time</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="flex space-x-4 items-center">
                  <img src="" />
                  <p>Madison Roy</p>
                </div>
              </td>
              <td>Wednesday, 4 PM - 6 PM</td>
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

export default BookedTrainers;
