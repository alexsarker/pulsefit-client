import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { AiOutlineDelete } from "react-icons/ai";
import useTrainer from "../../hooks/useTrainer";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllTrainers = () => {
  const [trainersData] = useTrainer();
  const axiosSecure = useAxiosSecure();
  const filteredTrainers = trainersData.filter(
    (trainer) => trainer.role === "Trainer"
  );

  const handleDelete = (trainer) => {
    console.log(trainer._id);
  };

  // trainer->delete, user->patch, 

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
          {/* Table head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Trainer Name</th>
              <th>Skills</th>
              <th>Available Slots</th>
              <th>Years of Experience</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {filteredTrainers.map((trainer, index) => (
              <tr key={trainer._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex space-x-4 items-center">
                    <img
                      src={trainer.profileImage}
                      className="avatar rounded-full w-6 h-6"
                      alt={trainer.name}
                    />
                    <p>{trainer.name}</p>
                  </div>
                </td>
                <td>{trainer.skills.join(", ")}</td>
                <td>{`${trainer.availableSlots.day}, ${trainer.availableSlots.time}`}</td>
                <td>{trainer.experience} Years</td>
                <td>
                  <div className="flex space-x-8 justify-center">
                    <AiOutlineDelete
                      onClick={() => handleDelete(trainer)}
                      className="text-2xl text-dodoria cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AllTrainers;
