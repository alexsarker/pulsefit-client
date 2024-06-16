import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { Toaster } from "react-hot-toast";
import useSubscribe from "../../hooks/useSubscribe";

const Subscribers = () => {
  const [subsData] = useSubscribe();

  return (
    <div>
      <Breadcrumbs
        router="/dashboard/subscribers"
        routeName="Newsletter Subscribers"
      />
      <DashTitle
        headline="Newsletter Subscribers"
        subHeadline="Manage Subscribers and Monitor Engagement"
      />

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          {/* Table head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Subscriber Name</th>
              <th>Email</th>
              <th>Date Subscribed</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {subsData.map((subscriber, index) => (
              <tr key={subscriber._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex space-x-4 items-center">
                    <img
                      src={subscriber.photo}
                      className="avatar rounded-full w-6 h-6"
                      alt={subscriber.name}
                    />
                    <p>{subscriber.name}</p>
                  </div>
                </td>
                <td>{subscriber.email}</td>
                <td>{subscriber.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Toaster component for displaying notifications */}
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Subscribers;
