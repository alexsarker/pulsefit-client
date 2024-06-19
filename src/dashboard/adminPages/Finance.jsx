import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import useBooked from "../../hooks/useBooked";

const Finance = () => {
  const [bookedData] = useBooked();
  const totalAmountPaid = bookedData.reduce(
    (total, booking) => total + booking.price,
    0
  );
  const lastUserPaid = bookedData.length > 0 ? bookedData[0] : null;

  return (
    <div>
      <Breadcrumbs router="/dashboard/finance" routeName="Financial Overview" />
      <DashTitle
        headline="Financial Overview"
        subHeadline="Track Financial Performance and Transactions"
      />

      <div className="flex justify-between items-center p-8 rounded-2xl bg-jiren">
        <div>
          <h4 className="text-lg font-bold">Account Balance</h4>
          <p className="text-trunks pb-4">
            This represents the cumulative total of all booking payments made by
            members.
          </p>
          <h1 className="text-6xl text-piccolo">
            ${totalAmountPaid.toFixed(2)}
          </h1>
        </div>
        <div className="text-end space-y-1">
          <h4 className="font-bold">Total Users Paid</h4>
          <p className="text-piccolo">{bookedData.length}</p>
          <h4 className="font-bold">Last User Paid</h4>
          <p className="text-piccolo">
            {lastUserPaid
              ? `${lastUserPaid.name}/$${lastUserPaid.price}`
              : "N/A"}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <h2 className="text-2xl mb-8">Recent Transactions</h2>
        <table className="table">
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Transaction ID</th>
              <th>Member Name</th>
              <th>Trainer Name</th>
              <th>Slot Name</th>
              <th>Package</th>
              <th>Amount Paid</th>
              <th>Date of Transaction</th>
            </tr>
          </thead>
          <tbody>
            {bookedData.slice(0, 6).map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking._id}</td>
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
                <td>{booking.date}</td>
                <td>{booking.packageName}</td>
                <td>${booking.price}</td>
                <td>{booking.bookedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Finance;
