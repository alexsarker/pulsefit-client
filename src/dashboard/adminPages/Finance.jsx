import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";

const Finance = () => {
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
          <h1 className="text-6xl text-piccolo">$468.00</h1>
        </div>
        <div className="text-end space-y-1">
          <h4 className="font-bold">Total Users Paid</h4>
          <p className="text-piccolo">25</p>
          <h4 className="font-bold">Last User Paid</h4>
          <p className="text-piccolo">Adil Shah/$50</p>
        </div>
      </div>

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <h2 className="text-2xl mb-8">Recent Transactions</h2>
        <table className="table">
          {/* head */}
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
            <tr>
              <td>1</td>
              <td>123457</td>
              <td>
                <div className="flex space-x-4 items-center">
                  <img src="" className="avatar rounded-full w-6 h-6" />
                  <p>Corina McCoy</p>
                </div>
              </td>
              <td>
                <div className="flex space-x-4 items-center">
                  <img src="" className="avatar rounded-full w-6 h-6" />
                  <p>Rhonda Rhodes</p>
                </div>
              </td>
              <td>Tuesday 9 AM - 11 AM</td>
              <td>Premium</td>
              <td>$100</td>
              <td>5/7/16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Finance;
