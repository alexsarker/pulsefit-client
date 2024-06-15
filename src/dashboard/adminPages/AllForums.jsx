import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/DashComp/Breadcrumbs";
import DashTitle from "../../components/DashComp/DashTitle";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import AddButton from "../../components/DashComp/AddButton";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const AllForums = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Breadcrumbs router="/dashboard/allForums" routeName="All Forum Posts" />
      <DashTitle
        headline="All Forum Posts"
        subHeadline="Monitor and Moderate Forum Discussions"
      />
      <AddButton name={"Add New Post"} onClick={() => setShowForm(true)} />
      {showForm && (
        <div className="p-10 border rounded-2xl w-max mx-auto mt-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">Add New Post</h2>
              <IoCloseOutline
                className="text-3xl cursor-pointer"
                onClick={() => setShowForm(false)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="input input-bordered w-72"
                placeholder="Post Title"
                {...register("title")}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                className="input input-bordered w-72"
                placeholder="Post Image URL"
                {...register("photo")}
                required
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered text-base"
                placeholder="Post Description"
                {...register("description")}
                required
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-piccolo w-max text-white px-10 hover:bg-[#2A2473]">
                Add
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-x-auto mx-auto mt-12 border p-6 rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-piccolo text-base">
              <th>#</th>
              <th>Forum Post</th>
              <th>Posted by</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="flex space-x-4 items-center">
                  <img src="" className="avatar rounded-full w-6 h-6" />
                  <p>Benefits of Morning Workouts</p>
                </div>
              </td>
              <td>Rhonda Rhodes</td>
              <td>
                <div className="flex space-x-8 justify-center">
                  <AiOutlineEdit className="text-2xl text-whis" />
                  <AiOutlineDelete className="text-2xl text-dodoria" />
                </div>
              </td>
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

export default AllForums;
