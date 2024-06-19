import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { IoCloseOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import useBooked from "../../hooks/useBooked";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const BookedTrainers = () => {
  const { user } = useAuth();
  const [bookedData, refetch] = useBooked();
  const axiosPublic = useAxiosPublic();

  const handleDelete = (bookingId) => {
    axiosPublic
      .delete(`/booked/${bookingId}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Slot deleted successfully");
          refetch();
        } else {
          toast.error("Failed to delete slot");
        }
      })
      .catch(() => {
        toast.error("An error occurred");
      });
  };

  return (
    <div>
      <Breadcrumbs
        routeName={"Booked Trainers"}
        router={"/dashboard/bookedTrainers"}
      />
      <DashTitle
        headline={"Booked Trainer"}
        subHeadline={"View and manage all your booked trainers"}
      />

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Trainer Name</th>
              <th>Date & Time</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedData
              .filter((booking) => booking.email === user.email)
              .map((booking, index) => (
                <tr key={booking._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex space-x-4 items-center">
                      <img
                        src={booking.trainerImage}
                        className="avatar rounded-full w-6 h-6"
                        alt={booking.trainerName}
                      />
                      <p>{booking.trainerName}</p>
                    </div>
                  </td>
                  <td>{booking.bookedDate}</td>
                  <td>
                    <div className="flex space-x-8 justify-center">
                      <IoCloseOutline
                        className="text-2xl text-dodoria cursor-pointer"
                        onClick={() => handleDelete(booking._id)}
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

export default BookedTrainers;
