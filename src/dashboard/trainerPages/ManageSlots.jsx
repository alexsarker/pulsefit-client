import Breadcrumbs from '../../components/DashComp/Breadcrumbs';
import DashTitle from '../../components/DashComp/DashTitle';
import { AiOutlineDelete } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useBooked from '../../hooks/useBooked';

const ManageSlots = () => {
  const axiosPublic = useAxiosPublic();
  const [bookedData, refetch] = useBooked();

  const handleDelete = (slotId) => {
    axiosPublic
      .delete(`/booked/${slotId}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success('Slot deleted successfully');
          refetch();
        } else {
          toast.error('Failed to delete slot');
        }
      })
      .catch(() => {
        toast.error('An error occurred');
      });
  };

  return (
    <div>
      <Breadcrumbs router="/dashboard/manageSlots" routeName="Manage Slots" />
      <DashTitle
        headline="Your Slots"
        subHeadline="View and manage all your available time slots."
      />

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Date</th>
              <th>Booked Name</th>
              <th>Class Name</th>
              <th>Subscription</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedData.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.bookedDate}</td>
                <td>
                  <div className="flex space-x-4 items-center">
                    <img
                      src={booking.photo}
                      className="avatar rounded-full w-6 h-6"
                      alt={booking.name}
                    />
                    <p>{booking.name}</p>
                  </div>
                </td>
                <td>{booking.trainerName}</td>
                <td>{booking.packageName}</td>
                <td>
                  <div className="flex space-x-8 justify-center">
                    <AiOutlineDelete
                      onClick={() => handleDelete(booking._id)}
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

export default ManageSlots;
