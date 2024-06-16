import { IoEyeOutline } from "react-icons/io5";
import { PiUserSwitchLight } from "react-icons/pi";
import { FcCancel } from "react-icons/fc";
import { Link } from "react-router-dom";
import useApply from "../../hooks/useApply";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import toast, { Toaster } from "react-hot-toast";

const AppliedTrainers = () => {
  const [applyData, refetch] = useApply();
  const axiosSecure = useAxiosSecure();

  const handleReject = (trainer, e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const feedback = form.get("feedback");

    const applyData = {
      status: "Rejected",
      feedback: feedback,
    };

    axiosSecure
      .patch(`/apply/email/${trainer.email}`, applyData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          document.getElementById(`my_modal_1_${trainer._id}`).close();
          toast.success(`${trainer.name} is rejected!`);
        }
      })
      .catch((error) => {
        console.error("Error updating trainer status:", error);
        toast.error("Failed to reject trainer");
      });
  };

  const handleMakeAdmin = (trainer) => {
    const applyData = {
      status: "Approved",
    };

    axiosSecure
      .patch(`/apply/email/${trainer.email}`, applyData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          const trainerData = {
            name: trainer.name,
            experience: trainer.experience,
            profileImage: trainer.photo,
            role: "Trainer",
            skills: trainer.skills,
            bio: trainer.bio,
            comprehensiveInformation: trainer.comprehensiveInformation,
            phone: trainer.phone,
            email: trainer.email,
            location: trainer.location,
            availableSlots: {
              day: trainer.day,
              time: `${trainer.startTime} - ${trainer.endTime}`,
            },
          };

          axiosSecure.post("/trainers", trainerData).then((res) => {
            if (res.data.insertedId) {
              const roleData = {
                role: "Trainer",
              };
              axiosSecure
                .patch(`/user/email/${trainer.email}`, roleData)
                .then(() => {
                  refetch();
                  toast.success(
                    `${trainer.name} is approved and added to trainers!`
                  );
                })
                .catch((error) => {
                  console.error("Error updating trainer role:", error);
                  toast.error("Failed to update trainer role");
                });
            }
          });
        }
      });
  };

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
            {applyData
              .filter((trainer) => trainer.status === "Pending")
              .map((trainer, index) => (
                <tr key={trainer._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex space-x-4 items-center">
                      <img
                        src={trainer.photo}
                        className="avatar rounded-full w-6 h-6"
                        alt={trainer.name}
                      />
                      <p>{trainer.name}</p>
                    </div>
                  </td>
                  <td>{trainer.age}</td>
                  <td>{trainer.skills.join(", ")}</td>
                  <td>{`${trainer.day}, ${trainer.startTime} - ${trainer.endTime}`}</td>
                  <td>{trainer.experience} Years</td>
                  <td>
                    <div className="flex space-x-8 justify-center">
                      <Link to={`/dashboard/apply/detail/${trainer._id}`}>
                        <IoEyeOutline className="text-2xl text-whis" />
                      </Link>
                      <PiUserSwitchLight
                        onClick={() => handleMakeAdmin(trainer)}
                        className="text-2xl text-roshi cursor-pointer"
                      />
                      <FcCancel
                        onClick={() =>
                          document
                            .getElementById(`my_modal_1_${trainer._id}`)
                            .showModal()
                        }
                        className="text-2xl text-dodoria cursor-pointer"
                      />
                      <dialog
                        id={`my_modal_1_${trainer._id}`}
                        className="modal"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg ">
                            Admin’s Feedback
                          </h3>
                          <form onSubmit={(e) => handleReject(trainer, e)}>
                            <div className="form-control">
                              <textarea
                                className="textarea textarea-bordered mt-4"
                                placeholder="Feedback"
                                name="feedback"
                                required
                              ></textarea>
                            </div>
                            <div className="modal-action">
                              <button
                                type="submit"
                                className="btn btn-sm bg-piccolo text-white hover:bg-[#D33030]"
                              >
                                Submit & Reject
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  document
                                    .getElementById(`my_modal_1_${trainer._id}`)
                                    .close()
                                }
                                className="btn btn-sm ml-4"
                              >
                                Close
                              </button>
                            </div>
                          </form>
                        </div>
                      </dialog>
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

export default AppliedTrainers;
