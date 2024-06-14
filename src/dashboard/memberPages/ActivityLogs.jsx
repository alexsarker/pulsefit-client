import { HiOutlineEye } from "react-icons/hi2";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { AiOutlineClose } from "react-icons/ai";
import useApply from "../../hooks/useApply";

const ActivityLogs = () => {
  const { applyData } = useApply();

  return (
    <div>
      <Breadcrumbs routeName={"Activity logs"} router={"/dashboard/logs"} />
      <DashTitle
        headline={"Activity Log"}
        subHeadline={"Track Your Application Status and Review Feedback"}
      />

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>Application Date</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{applyData.appliedDate}</td>
              <td>Trainer</td>
              <td
                className={
                  applyData.status === "Pending"
                    ? "text-whis"
                    : applyData.status === "Approved"
                    ? "text-roshi"
                    : applyData.status === "Rejected"
                    ? "text-dodoria"
                    : ""
                }
              >
                {applyData.status}
              </td>
              <td>
                <div className="flex space-x-8 justify-center">
                  <HiOutlineEye
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="text-2xl text-raditz link"
                  />
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Admin’s Feedback</h3>
                      <p className="py-4 text-trunks text-base">
                        {/* {applyData.feedback} */}
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm bg-dodoria text-white">
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <AiOutlineClose className="text-2xl text-dodoria" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLogs;
