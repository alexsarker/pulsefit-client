import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { Toaster } from "react-hot-toast";

const Subscribers = () => {
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
          {/* head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Subscriber Name</th>
              <th>Email</th>
              <th>Date Subscribed</th>
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
              <td>stephanienicol@outlook.com</td>
              <td>May 30, 2024</td>
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

export default Subscribers;
